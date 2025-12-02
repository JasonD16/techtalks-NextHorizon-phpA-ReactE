<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
class RoleSeeder extends Seeder
{
    //Seed the roles table with the base roles
    public function run(): void
    {
        $roles=[
            "student",
            "admin",
            "tutor"
        ];
        foreach($roles as $role){
            Role::updateOrCreate(["name"=>$role]); //If the entry already exists dont do anything(prevent duplicates)
        }
    }
}
