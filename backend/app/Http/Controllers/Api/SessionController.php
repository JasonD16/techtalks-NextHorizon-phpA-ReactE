<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SessionRequest;
use App\Http\Resources\SessionResource;
use Illuminate\Http\Request;
use App\Models\Session;
use App\Models\Session_User;

class SessionController extends Controller
{
    //Return all sessions
    public function index()
    {
        $sessions = Session::where('start_time', '>', now())
            ->withCount("attendees")
            ->orderBy('start_time', 'asc')
            ->paginate(10);
        return response()->json([
            "message" => "sessions retrieved successfully",
            "sessions" => SessionResource::collection($sessions)
        ]);
    }

    //Store a session
    public function store(SessionRequest $request)
    {
        $validated = $request->validated();
        $validated["tutor_id"] = $request->user()->id;
        $session = Session::create($validated);
        return response()->json([
            "message" => "session created successfully",
            "session" => new SessionResource($session),
        ]);
    }

    //Attend a session
    public function attend(Request $request, $id)
    {
        $session = Session::findOrFail($id);
        //Check if the user is already attented
        $isAttended = Session_User::where(["session_id" => $session->id, "user_id" => $request->user()->id])->exists();

        //Toggling attendance
        if ($isAttended) {
            Session_User::where(["session_id" => $session->id, "user_id" => $request->user()->id])->delete();
            return response()->json([
                "message" => "User removed from attendees",
                'attending' => false,
                "attendees_count"=>$session->attendees()->count()
            ], 200);
        }
        Session_User::create(["session_id" => $session->id, "user_id" => $request->user()->id]);
        return response()->json([
            "message" => "User added to attendees",
            'attending' => true,
            "attendees_count"=>$session->attendees()->count()
        ], 201);
    }
}
