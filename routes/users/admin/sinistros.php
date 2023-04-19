<?php

use App\Http\Controllers\Admin\Sinistro\SinistroController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->prefix('admin')
    ->group(function () {

        Route::resource('sinistros', SinistroController::class);

        Route::post('sinistros-update-status/{id}/{status}', [SinistroController::class, 'updateStatus'])
            ->name('sinistros-update-status');
    });
