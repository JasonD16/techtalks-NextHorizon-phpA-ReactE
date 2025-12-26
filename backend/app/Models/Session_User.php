<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Session_User extends Model
{
    protected $table="session_users";
    protected $fillable = [
        "user_id",
        "session_id"
    ];
}
