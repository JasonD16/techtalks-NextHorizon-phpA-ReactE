<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Http\Resources\ReplyResource;
use App\Models\Question;
use App\Models\Course;
use App\Models\Reply;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //Return all questions
    public function index(Request $request)
    {
        //Filter by course if available
        $request->validate([
            'course_id' => "nullable|integer|exists:courses,id"
        ]);
        $questions = Question::query()
            ->when($request->filled('course_id'), function ($q) use ($request) {
                $q->where('course_id', $request->course_id);
            })->latest()->paginate(10);
        return QuestionResource::collection($questions)->additional([
            'message' => 'questions retrieved successfully',
        ]);
    }

    //Show a detailed question with its replies
    public function show($id)
    {
        $question = Question::with("replies")->findOrFail($id);
        return response()->json([
            "message" => "question retrieved successfully",
            "question" => new QuestionResource($question)
        ], 200);
    }

    //Store a question
    public function store(QuestionRequest $request)
    {
        $validated = $request->validated();
        $validated["user_id"] = $request->user()->id;
        $question = Question::create($validated);
        return response()->json([
            "message" => "Question added successfully",
            "question" => new QuestionResource($question)
        ], 201);
    }

    //Add a reply for a specific question
    public function storeReply(Request $request, $id)
    {
        $request->validate([
            "body" => "required|string"
        ]);
        $question = Question::findOrFail($id);
        $reply = Reply::create([
            "body"=>$request["body"],
            "user_id"=>$request->user()->id,
            "question_id"=>$question->id
        ]);
        return response()->json([
            "message"=>"Reply added successfully",
            "reply"=>new ReplyResource($reply)
        ],201);
    }
}
