<?php

use App\Http\Controllers\Clientes\Pesquisa\PesquisaController;
use Illuminate\Support\Facades\Route;

Route::name('clientes.')
    ->prefix('clientes')
    ->group(function () {

        Route::get('pesquisa', [PesquisaController::class, 'index'])->name('pesquisa');

        Route::post('pesquisar', [PesquisaController::class, 'pesquisar'])->name('pesquisar');
        Route::get('pesquisar', [PesquisaController::class, 'index']);

        Route::get('encontrados', [PesquisaController::class, 'pesquisar'])->name('encontrados');

        Route::get('mostrar/{id}', [PesquisaController::class, 'mostrar'])->name('mostrar');
    });
