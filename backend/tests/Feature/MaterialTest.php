<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use App\Models\Course;
use App\Models\Material;

class MaterialTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;
    protected $tutor;
    protected $student;
    protected $course;
    protected $otherCourse;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Setup Roles
        $adminRole = Role::firstOrCreate(['name' => 'Admin']);
        $tutorRole = Role::firstOrCreate(['name' => 'Tutor']);
        $studentRole = Role::firstOrCreate(['name' => 'Student']);

        // Create University
        $university = \App\Models\University::create([
            'name' => 'Test Uni',
            'short_name' => 'TU',
            'city' => 'Test City'
        ]);

        // Create Users with required University ID
        $this->admin = User::factory()->create([
            'role_id' => $adminRole->id, 
            'university_id' => $university->id
        ]);
        $this->tutor = User::factory()->create([
            'role_id' => $tutorRole->id, 
            'university_id' => $university->id
        ]);
        $this->student = User::factory()->create([
            'role_id' => $studentRole->id, 
            'university_id' => $university->id
        ]);

        // Create Courses
        $this->course = Course::create([
             'name' => 'Calculus I',
             'code' => 'MAT101'
        ]);
        $this->otherCourse = Course::create([
             'name' => 'Physics I',
             'code' => 'PHY101'
        ]);

        // Assign Tutor to Course
        $this->tutor->courses()->attach($this->course->id);
    }

    public function test_admin_can_upload_material()
    {
        Storage::fake('public');

        $file = UploadedFile::fake()->create('document.pdf', 1000);

        $response = $this->actingAs($this->admin)->postJson('/api/materials', [
            'title' => 'Admin Upload',
            'course_id' => $this->course->id,
            'year' => '2023-2024',
            'type' => 'summary',
            'is_link' => false,
            'file' => $file,
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('materials', ['title' => 'Admin Upload']);
        Storage::disk('public')->assertExists('materials/' . $file->hashName());
    }

    public function test_tutor_can_upload_link_to_assigned_course()
    {
        $response = $this->actingAs($this->tutor)->postJson('/api/materials', [
            'title' => 'Tutor Link',
            'course_id' => $this->course->id,
            'year' => '2023-2024',
            'type' => 'exam',
            'is_link' => true,
            'link' => 'https://youtube.com/watch?v=123',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('materials', [
            'title' => 'Tutor Link',
            'file_path' => 'https://youtube.com/watch?v=123',
            'is_link' => true
        ]);
    }

    public function test_tutor_cannot_upload_to_unassigned_course()
    {
        $response = $this->actingAs($this->tutor)->postJson('/api/materials', [
            'title' => 'Unauthorized Upload',
            'course_id' => $this->otherCourse->id,
            'year' => '2023-2024',
            'type' => 'summary',
            'is_link' => true,
            'link' => 'https://google.com',
        ]);

        $response->assertStatus(403);
    }

    public function test_validation_file_required_if_is_link_false()
    {
        $response = $this->actingAs($this->admin)->postJson('/api/materials', [
            'title' => 'Missing File',
            'course_id' => $this->course->id,
            'year' => '2023',
            'type' => 'summary',
            'is_link' => false,
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['file']);
    }

    public function test_soft_delete_functionality()
    {
        $material = Material::create([
            'title' => 'To Delete',
            'course_id' => $this->course->id,
            'year' => '2024',
            'type' => 'solution',
            'uploaded_by' => $this->tutor->id,
        ]);

        // Tutor deletes their own material
        $response = $this->actingAs($this->tutor)->deleteJson("/api/materials/{$material->id}");

        $response->assertStatus(200);
        
        // Assert Soft Deleted
        $this->assertSoftDeleted('materials', ['id' => $material->id]);
    }
}
