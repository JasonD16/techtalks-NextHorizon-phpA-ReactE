<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 1. The Super Admin (You)
        User::create([
            'name' => 'admin',
            'email' => 'admin@techtalks.com',
            'password' => Hash::make('password'), // Always hash passwords
            'role_id' => 1,
            'university_id' => 1,
            'major' => 'Computer Science',
            'year' => 3
        ]);

        // 2. A Regular Student (For testing access denied)
        User::create([
            'name' => 'student',
            'email' => 'student@techtalks.com',
            'password' => Hash::make('password'),
            'role_id' => 3,
            'university_id' => 1,
            'major' => 'Biology',
            'year' => 1
        ]);

        // 3. A Tutor
        $tutor = User::create([
            'name' => 'tutor',
            'email' => 'tutor@techtalks.com',
            'password' => Hash::make('password'),
            'role_id' => 3,
            'university_id' => 1,
            'major' => 'Mathematics',
            'year' => 4
        ]);

        $course = \App\Models\Course::first();
        if($course) {
            $tutor->courses()->attach($course->id);
        }
    }
}