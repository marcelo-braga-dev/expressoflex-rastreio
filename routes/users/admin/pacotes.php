<?php

use App\Http\Controllers\Admin\Pacotes\PacotesController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->prefix('admin')
    ->group(function () {

        Route::resource('pacotes', PacotesController::class);
        Route::post('pacotes-update-status/{id}/{status}', [PacotesController::class, 'updateStatus'])
        ->name('pacotes-update-status');
    });
