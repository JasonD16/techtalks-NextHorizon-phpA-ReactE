<?php

use App\Http\Controllers\Api\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UniversityController;
use App\Http\Controllers\Api\CourseController;

//AUTH
Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);

Route::get('/courses', [CourseController::class, 'index']);
Route::get("/universities", [UniversityController::class, "index"]);

///Protected routes///
//AUTH
Route::middleware("auth:sanctum")->group(function () {
    Route::post("/logout", [AuthController::class, "logout"]);
    
    //COURSES
    Route::post('/courses', [CourseController::class, 'store']);
    Route::delete('/courses/{id}', [CourseController::class, 'destroy']);

    //MATERIALS
    Route::post('/materials', [MaterialController::class, 'store']);
    Route::delete('/materials/{id}', [MaterialController::class, 'destroy']);
    Route::get('/materials/filter',[MaterialController::class,'filterMaterial']);

    // ASSIGN TUTORS
    Route::post('/courses/assign', [\App\Http\Controllers\Api\CourseUserController::class, 'store']);
    Route::post('/courses/unassign', [\App\Http\Controllers\Api\CourseUserController::class, 'destroy']);
    
    // PROFILE
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::put('/profile/update', [ProfileController::class, 'update']);
});