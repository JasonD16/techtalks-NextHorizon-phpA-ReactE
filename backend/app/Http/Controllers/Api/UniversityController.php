<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\University;
use App\Http\Resources\UniversityResource;
use Illuminate\Validation\Rule;

class UniversityController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $universities = University::all();
        return response()->json([
            "message" => "Universities retrieved successfully",
            "universities" => UniversityResource::collection($universities)
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $university = University::findOrFail($id);
        return response()->json([
            "message" => "University retrieved successfully",
            "university" => new UniversityResource($university)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * Only Admin.
     */
    public function store(Request $request)
    {
        // 1. Authorization
        if ($request->user()->role?->name !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // 2. Validation
        $validated = $request->validate([
            'name' => 'required|string|unique:universities,name|max:255',
            'short_name' => 'nullable|string|max:50',
            'city' => 'nullable|string|max:100',
        ]);

        // 3. Create
        $university = University::create($validated);

        return response()->json([
            "message" => "University created successfully",
            "university" => new UniversityResource($university)
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     * Only Admin.
     */
    public function update(Request $request, $id)
    {
        // 1. Authorization
        if ($request->user()->role?->name !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $university = University::findOrFail($id);

        // 2. Validation
        $validated = $request->validate([
            'name' => [
                'required', 
                'string', 
                'max:255', 
                Rule::unique('universities')->ignore($university->id)
            ],
            'short_name' => 'nullable|string|max:50',
            'city' => 'nullable|string|max:100',
        ]);

        // 3. Update
        $university->update($validated);

        return response()->json([
            "message" => "University updated successfully",
            "university" => new UniversityResource($university)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * Only Admin.
     */
    public function destroy(Request $request, $id)
    {
        // 1. Authorization
        if ($request->user()->role?->name !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $university = University::findOrFail($id);
        
        // TODO: Check for dependent records (users, courses) before delete?
        // cascading delete takes care of DB, but logical check might be good.
        
        $university->delete();

        return response()->json([
            "message" => "University deleted successfully"
        ]);
    }
}
