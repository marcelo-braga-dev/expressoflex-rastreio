<?php

use App\Http\Controllers\Admin\Home\HomeController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::get('home', [HomeController::class, 'index'])->name('home');
    });
