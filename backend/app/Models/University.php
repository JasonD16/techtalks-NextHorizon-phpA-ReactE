<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class University extends Model
{
    protected $fillable = [
        "name",
        "short_name",
        "city"
    ];
    
    //Get all users that belongs to a specific university
    public function users(){
        return $this->hasMany(User::class);
    }
}
