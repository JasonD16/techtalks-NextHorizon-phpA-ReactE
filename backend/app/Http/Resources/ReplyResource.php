<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
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
            "body"=>$this->body,
            "user"=>[
                "user_id"=>$this->user_id,
                "user_name"=>$this->user->name
            ],
            "question"=>[
                "question_id"=>$this->question_id,
                "question_title"=>$this->question->title,
            ]
        ];
    }
}
