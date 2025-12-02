<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\University;
class UniversitySeeder extends Seeder
{
    //Seed the universities table with all universties in lebanon
    public function run(): void
    {
        $universities = [
            ['name' => 'Al Imam Al-Ouzai University', 'short_name' => 'AIOU', 'city' => 'Beirut'],
            ['name' => 'American University of Beirut', 'short_name' => 'AUB', 'city' => 'Beirut'],
            ['name' => 'American University of Culture and Education', 'short_name' => 'AUCE', 'city' => 'Beirut'],
            ['name' => 'American University of Science and Technology', 'short_name' => 'AUST', 'city' => 'Beirut'],
            ['name' => 'American University of Technology', 'short_name' => 'AUT', 'city' => 'Halat Fidar'],

            ['name' => 'Arab Open University Lebanon', 'short_name' => 'AOU', 'city' => 'Beirut'],
            ['name' => 'Arts, Sciences and Technology University in Lebanon', 'short_name' => 'AUL', 'city' => 'Beirut'],
            ['name' => 'Beirut Arab University', 'short_name' => 'BAU', 'city' => 'Beirut'],
            ['name' => 'Beirut Islamic University', 'short_name' => 'BIU', 'city' => 'Beirut'],
            ['name' => 'City University', 'short_name' => 'CityU', 'city' => 'Tripoli'],

            ['name' => 'École Supérieure des Affaires', 'short_name' => 'ESA', 'city' => 'Beirut'],
            ['name' => 'Global University', 'short_name' => 'GU', 'city' => 'Beirut'],
            ['name' => 'Haigazian University', 'short_name' => 'HU', 'city' => 'Beirut'],
            ['name' => 'Islamic University of Lebanon', 'short_name' => 'IUL', 'city' => 'Khalde'],
            ['name' => 'Jinan University of Lebanon', 'short_name' => 'JU', 'city' => 'Tripoli'],

            ['name' => 'Lebanese American University', 'short_name' => 'LAU', 'city' => 'Beirut'],
            ['name' => 'Lebanese German University', 'short_name' => 'LGU', 'city' => 'Jounieh'],
            ['name' => 'Lebanese International University', 'short_name' => 'LIU', 'city' => 'Beirut'],
            ['name' => 'Makassed University of Beirut', 'short_name' => 'MU', 'city' => 'Beirut'],
            ['name' => 'Matn University College of Technology', 'short_name' => 'MUCT', 'city' => 'Beirut'],

            ['name' => 'Middle East University', 'short_name' => 'MEU', 'city' => 'Beirut'],
            ['name' => 'Modern University for Business and Science', 'short_name' => 'MUBS', 'city' => 'Damour'],
            ['name' => 'Notre Dame University - Louaize', 'short_name' => 'NDU', 'city' => 'Zouk Mosbeh'],
            ['name' => 'Rafik Hariri University', 'short_name' => 'RHU', 'city' => 'Damour'],

            ['name' => 'Université Al-Kafaat', 'short_name' => 'AKU', 'city' => 'Ain Saadeh'],
            ['name' => 'Université Antonine', 'short_name' => 'UA', 'city' => 'Hadat'],
            ['name' => 'Université de Technologie et de Sciences Appliquées Libano-Française', 'short_name' => 'ULF', 'city' => 'Tripoli'],
            ['name' => 'Université du Tripoli', 'short_name' => 'UT', 'city' => 'Tripoli'],

            ['name' => 'Université la Sagesse', 'short_name' => 'ULS', 'city' => 'Beirut'],
            ['name' => 'Université Libanaise', 'short_name' => 'UL', 'city' => 'Beirut'],
            ['name' => 'Université Libano-Canadienne', 'short_name' => 'LCU', 'city' => 'Aintoura'],
            ['name' => 'Université Sainte Famille', 'short_name' => 'USF', 'city' => 'Batroun'],
            ['name' => 'Université Saint-Esprit de Kaslik', 'short_name' => 'USEK', 'city' => 'Jounieh'],
            ['name' => 'Université Saint-Joseph de Beyrouth', 'short_name' => 'USJ', 'city' => 'Beirut'],

            ['name' => 'University of Balamand', 'short_name' => 'UOB', 'city' => 'El-Koura'],
        ];

        foreach ($universities as $university) {
            University::updateOrCreate($university);
        }
    }
}
