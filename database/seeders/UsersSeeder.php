<?php

namespace Database\Seeders;

use App\Models\User;
use App\src\Usuarios\Admins;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        (new User())->newQuery()
            ->create([
                'name' => 'Admin',
                'funcao' => (new Admins)->getFuncao(),
                'email' => 'admin@teste.com',
                'password' => Hash::make('1020'),
            ]);
    }
}
