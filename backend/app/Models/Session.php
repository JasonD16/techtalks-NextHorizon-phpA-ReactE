<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    protected $table = 'meeting_sessions';
    protected $fillable = [
        "tutor_id",
        "title",
        "meeting_link",
        "start_time",
        "duration"
    ];
    public function attendees(){
        return $this->hasMany(Session_User::class);
    }
    public function tutor(){
        return $this->belongsTo(User::class);
    }
}
