<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * GET /courses
     * Returns a list of all courses.
     * Accessible by: Everyone (Students, Tutors, Admins)
     */
    public function index()
    {
        //Fetch all courses from the DB
        $courses = Course::all();

        return response()->json($courses, 200);
    }

    /**
     * POST /courses
     * Creates a new course.
     * Accessible by: Admins Only
     */
    public function store(Request $request)
    {
        // 1. SECURITY: Authorization Check
        // We check the 'role' column of the logged-in user.
        // Note: This assumes you are authenticated
        if ($request->user()->role?->name !== 'admin') {
             return response()->json(['message' => 'Access Denied: Admins Only'], 403);
        }

        // 2. VALIDATION: Ensure data integrity
        // If 'code' is missing or duplicate, Laravel throws a 422 error automatically.
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|unique:courses,code|max:10',
        ]);

        // 3. ACTION: Create the course
        // We use $validated to ensure we only save clean data.
        $course = Course::create($validated);

        // 4. RESPONSE: Return the created object
        // Status 201 means "Created successfully".
        return response()->json([
            'message' => 'Course created successfully',
            'course' => $course
        ], 201);
    }
    
    public function destroy(Request $request, string $id)
    {
        // 1. SECURITY: Admin Check
        if ($request->user()->role?->name !== 'admin') {
            return response()->json(['message' => 'Access Denied: Admins Only'], 403);
        }

        // 2. FIND: Locate the course or fail with 404
        $course = Course::findOrFail($id);

        // TODO: Check if course has materials before deleting (Wait for Materials Epic)

        // 3. ACTION: Soft Delete
        // Since we added 'SoftDeletes' trait to the Model, this updates 'deleted_at'
        // instead of removing the row.
        $course->delete();

        // 4. RESPONSE: 200 OK
        return response()->json(['message' => 'Course deleted successfully'], 200);
    }
}