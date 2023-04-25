<?php

use App\Http\Controllers\Admin\Usuarios\UsuariosController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->prefix('admin')
    ->group(function () {

        Route::resource('usuarios', UsuariosController::class);
        Route::put('usuarios-atualizar-senha/{id}', [UsuariosController::class, 'atualizarSenha'])
            ->name('usuarios-atualizar-senha');
    });
