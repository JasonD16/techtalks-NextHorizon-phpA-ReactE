<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        "title",
        "body",
        "course_id",
        "user_id"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function course(){
        return $this->belongsTo(Course::class);
    }
    public function replies(){
        return $this->hasMany(Reply::class);
    }
}
