<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            // Primary Key: Auto-incrementing ID
            $table->id();

            // The Course Name (e.g., "Calculus I")
            $table->string('name');

            // The Course Code (e.g., "CSC201")
            // 'unique' ensures no two courses have the same code.
            $table->string('code')->unique();

            // Created_at and Updated_at timestamps
            $table->timestamps();

            // Soft Deletes: Adds a 'deleted_at' column so we don't lose data permanently on delete
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};