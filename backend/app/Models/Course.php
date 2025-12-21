<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     * Use this to whitelist fields that can be updated safely.
     * * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'code',
    ];

    public function tutors()
    {
        return $this->belongsToMany(User::class, 'course_user');
    }

    public function materials()
    {
        return $this->hasMany(Material::class);
    }
}