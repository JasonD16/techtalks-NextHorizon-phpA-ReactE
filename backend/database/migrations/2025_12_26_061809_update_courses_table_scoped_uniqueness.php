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
        Schema::table('courses', function (Blueprint $table) {
            // 1. Drop the existing global unique constraint on 'code'
            $table->dropUnique(['code']); 

            // 2. Add university_id column
            // Assuming universities table exists and id is 1 by default or explicitly required.
            // Using constrained() assumes 'universities' table exists.
            $table->foreignId('university_id')->after('code')->constrained()->cascadeOnDelete();

            // 3. Add composite unique constraint
            $table->unique(['code', 'university_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropUnique(['code', 'university_id']);
            $table->dropForeign(['university_id']);
            $table->dropColumn('university_id');
            $table->unique('code'); // Restore global unique
        });
    }
};
