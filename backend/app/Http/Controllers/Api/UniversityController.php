<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\University;
use App\Http\Resources\UniversityResource;
class UniversityController extends Controller
{

    //Return all universities
    public function index(){
        $universities=University::all();
        return response()->json([
            "message"=>"Universities retrieved successfully",
            "universities"=>UniversityResource::collection($universities)
        ]);
    }
}
