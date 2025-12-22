<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Material;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Gate;

class MaterialController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();

        // 1. Authorization
        // Admin: Allowed
        // Tutor: Allowed only if they teach this course
        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);

        $roleName = strtolower($user->role?->name ?? '');
        $isTutorForCourse = $roleName === 'tutor' && $user->courses()->where('courses.id', $request->course_id)->exists();
        $isAdmin = $roleName === 'admin';

        if (!$isAdmin && !$isTutorForCourse) {
            return response()->json(['message' => 'Unauthorized. You do not have permission to add materials to this course.'], 403);
        }

        // 2. Validation
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'course_id' => 'required|exists:courses,id',
            'year' => 'required|string', // e.g., "2023-2024"
            'type' => 'required|in:summary,exam,solution',
            'is_link' => 'boolean',
            'file' => [
                'required_if:is_link,false,0',
                'file',
                'mimes:pdf,jpg,jpeg,png',
                'max:10240', // 10MB
            ],
            'link' => [
                'required_if:is_link,true,1',
                'url',
            ]
        ]);

        $filePath = null;

        // 3. Handle Storage
        if ($request->boolean('is_link')) {
             $filePath = $request->link;
        } else {
            if ($request->hasFile('file')) {
                $filePath = $request->file('file')->store('materials', 'public');
            }
        }

        // 4. Create Record
        $material = Material::create([
            'title' => $validated['title'],
            'file_path' => $filePath,
            'is_link' => $request->boolean('is_link'),
            'course_id' => $validated['course_id'],
            'year' => $validated['year'],
            'type' => $validated['type'],
            'uploaded_by' => $user->id,
        ]);

        return response()->json($material, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $material = Material::findOrFail($id);
        $user = request()->user();

        // Authorization
        $roleName = strtolower($user->role?->name ?? '');
        $isAdmin = $roleName === 'admin';
        
        // Tutors can only delete their own uploads, admins can delete anything
        
        $isOwner = $user->id === $material->uploaded_by;

        if (!$isAdmin && !$isOwner) {
             return response()->json(['message' => 'Unauthorized.'], 403);
        }

        $material->delete(); // Soft delete

        return response()->json(['message' => 'Material deleted successfully.']);
    }
    public function filterMaterial(Request $request)
    {
        $query = Material::query();

        // Context: Filtering is always scoped to a course
        if ($request->filled('course_id')) {
            $query->where('course_id', $request->course_id);
        }

        // Search by Title (partial)
        if ($request->filled('title')) {
             $query->where('title', 'like', '%' . $request->title . '%');
        }

        // Filter by Type (exact)
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        // Filter by Year (exact)
        if ($request->filled('year')) {
            $query->where('year', $request->year);
        }

         // Filter by Is Link (boolean)
        if ($request->filled('is_link')) {
             $query->where('is_link', $request->boolean('is_link'));
        }

        return response()->json($query->get());
    }
}
