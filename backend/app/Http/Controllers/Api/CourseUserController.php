<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;

class CourseUserController extends Controller
{
    public function store(Request $request)
    {
        // 1. Authorization: Only Admin
        if ($request->user()->role->name !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // 2. Validation
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
        ]);

        // 3. Logic: Attach User (Tutor) to Course
        $course = \App\Models\Course::find($validated['course_id']);
        $course->tutors()->syncWithoutDetaching([$validated['user_id']]);

        return response()->json(['message' => 'Tutor assigned to course successfully.']);
    }

    public function destroy(Request $request)
    {
        // 1. Authorization: Only Admin
         if ($request->user()->role->name !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

         // 2. Validation
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
        ]);

        // 3. Logic: Detach
        $course = \App\Models\Course::find($validated['course_id']);
        $course->tutors()->detach($validated['user_id']);

        return response()->json(['message' => 'Tutor removed from course successfully.']);
    }
};
