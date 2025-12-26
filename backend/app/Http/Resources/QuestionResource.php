<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>$this->id,
            "title"=>$this->title,
            "body"=>$this->body,
            "user"=>[
                "user_id"=>$this->user->id,
                "user_name"=>$this->user->name
            ],
            "course"=>[
                "course_id"=>$this->course->id,
                "course_code"=>$this->course->code
            ],
            "replies"=>ReplyResource::collection($this->whenLoaded("replies"))
        ];
    }
}
