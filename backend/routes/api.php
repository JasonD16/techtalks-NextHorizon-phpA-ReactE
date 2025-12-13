<?php

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

});