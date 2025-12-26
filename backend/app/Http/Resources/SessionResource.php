<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SessionResource extends JsonResource
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
            "tutor"=>[
                "tutor_id"=>$this->tutor_id,
                "tutor_name"=>$this->tutor->name
            ],
            "start_time"=>$this->start_time,
            "meeting_link"=>$this->meeting_link,
            "duration"=>$this->duration,
            "attendees_count"=>$this->attendees_count,
            "created_at"=>$this->created_at,

        ];
    }
}
