<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use App\Models\User;
use App\Models\University;
use App\Models\Role;

class ProfileTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        // Create a default role for users
        Role::create(['name' => 'User']);
    }

    public function test_user_can_update_major_and_university()
    {
        $university = University::create([
            'name' => 'Old University',
            'short_name' => 'OldU',
            'city' => 'Old City'
        ]);
        
        $newUniversity = University::create([
            'name' => 'New University',
            'short_name' => 'NewU',
            'city' => 'New City'
        ]);

        $user = User::factory()->create([
            'major' => 'Computer Science',
            'university_id' => $university->id,
            'year' => 1
        ]);

        $response = $this->actingAs($user)->putJson('/api/profile/update', [
            'major' => 'Mathematics',
            'university_id' => $newUniversity->id,
        ]);

        $response->assertStatus(200);
        
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'major' => 'Mathematics',
            'university_id' => $newUniversity->id,
        ]);
    }

    public function test_user_can_update_year()
    {
        $university = University::create([
            'name' => 'Test University',
            'short_name' => 'TestU',
            'city' => 'Test City'
        ]);

        $user = User::factory()->create([
            'year' => 1,
            'university_id' => $university->id
        ]);

        $response = $this->actingAs($user)->putJson('/api/profile/update', [
            'year' => 2,
        ]);

        $response->assertStatus(200);
        
        // This assertion is expected to fail with the current implementation
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'year' => 2,
        ]);
    }

    public function test_user_can_upload_profile_picture()
    {
        Storage::fake('public');
        $file = UploadedFile::fake()->image('avatar.jpg');

        $university = University::create([
            'name' => 'Test University',
            'short_name' => 'TestU',
            'city' => 'Test City'
        ]);

        $user = User::factory()->create([
            'university_id' => $university->id
        ]);

        $response = $this->actingAs($user)->putJson('/api/profile/update', [
            'profile_image' => $file,
        ]);

        $response->assertStatus(200);
        
        $user->refresh();
        $this->assertNotNull($user->profile_image);
        Storage::disk('public')->assertExists($user->profile_image);
    }

    public function test_validation_fails_for_invalid_university_id()
    {
        $university = University::create([
            'name' => 'Test University',
            'short_name' => 'TestU',
            'city' => 'Test City'
        ]);

        $user = User::factory()->create([
            'university_id' => $university->id
        ]);

        $response = $this->actingAs($user)->putJson('/api/profile/update', [
            'university_id' => 99999, // Invalid ID
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['university_id']);
    }
}
