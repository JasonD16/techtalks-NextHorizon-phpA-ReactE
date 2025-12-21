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
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('file_path')->nullable()->comment('Stores local storage path or full URL');
            $table->boolean('is_link')->default(false);
            $table->foreignId('course_id')->constrained('courses')->cascadeOnDelete();
            $table->string('year'); // e.g. "2023-2024"
            $table->enum('type', ['summary', 'exam', 'solution']);
            $table->foreignId('uploaded_by')->constrained('users')->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};
