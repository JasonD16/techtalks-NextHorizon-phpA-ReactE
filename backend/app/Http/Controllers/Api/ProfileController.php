<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\University;
class ProfileController extends Controller
{
    public function index (Request $request){
        $user = $request->user();
       $university = University::find($user->university_id);
        $university_name = $university ? $university->name : null;//checks if university exist if not return null and to prevent run time errors
        return response()->json([
            "user_info"=>$user,
            "uni_name"=>$university_name,
        ]);
    }

   public function update(Request $request)
    {
        $user = $request->user();

        // Validate input
        $validated = $request->validate([
            'major' => 'sometimes|string|max:255',
            'university_id' => 'sometimes|exists:universities,id',
            'year' => 'sometimes|integer',
            'profile_image' => 'sometimes|image|max:2048', // handle file upload
        ]);

        // Update text fields
        if (isset($validated['major'])) {
            $user->major = $validated['major'];
        }

        if (isset($validated['year'])) {
            $user->year = $validated['year'];
        }

        if (isset($validated['university_id'])) {
            $user->university_id = $validated['university_id'];
        }

        // Handle file upload
        if ($request->hasFile('profile_image')) {
            $path = $request->file('profile_image')->store('profile_images', 'public');
            $user->profile_image = $path;
        }

        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'user_info' => $user,
        ]);
    }
}
