<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{

    // Register a new user and return a Sanctum token
    public function register(RegisterRequest $request)
    {
        
        $validated = $request->validated(); 
        // Hash password 
        $validated["password"] = Hash::make($validated["password"]); 
        $user = User::create($validated); 
        // Generate personal access token for API authentication
        $token = $user->createToken("auth_token")->plainTextToken; 
        return response()->json([ 
            "message" => "User registered successfully",
            "user" => new UserResource($user), // consistent API shape and control exposed fields
            "token" => $token,
            "type" => "bearer"
        ], 201);
    }

    // Login an existing user and issue a fresh token.
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();  
        if (!Auth::attempt($credentials)) { //Attempt to login
            return response()->json([      
                "message" => "Wrong credentials"
            ], 401);
        }
        $user = Auth::user();
        //Delete all previous tokens
        $user->tokens()->delete();
        $token=$user->createToken("auth_token")->plainTextToken; 
        return response()->json([
            "message" => "Logged in successfully",
            "user"=>new UserResource($user),
            "token"=>$token,
            "type"=>"bearer",
            "role"=>[
                "id"=>$user->role->id,
                "name"=>$user->role->name
                ]
        ], 200);
    }
    
    //Logout and delete the current access token
    public function logout(Request $request){
        $user=$request->user();
        $user->currentAccessToken()->delete();
        return response()->json([
            "message"=>"Logged out successfully"
        ]);
    }
}
