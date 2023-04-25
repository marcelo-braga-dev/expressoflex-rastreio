<?php

use Illuminate\Support\Facades\Route;

require __DIR__.'/clientes/index.php';

Route::middleware('auth')
    ->group(function () {
        require __DIR__.'/admin/index.php';
    });
