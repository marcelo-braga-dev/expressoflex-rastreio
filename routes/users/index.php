<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->group(function () {
        require __DIR__.'/admin/index.php';
    });
