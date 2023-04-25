<?php

use App\Http\Controllers\Admin\Home\HomeController;
use Illuminate\Support\Facades\Route;

require __DIR__.'/pacotes.php';
require __DIR__.'/sinistros.php';
require __DIR__.'/usuarios.php';

Route::name('admin.')
    ->prefix('admin')
    ->group(function () {

        Route::get('home', [HomeController::class, 'index'])->name('home');
    });
