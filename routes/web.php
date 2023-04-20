<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';
require __DIR__.'/users/index.php';

Route::get('/', function () {

    switch (funcao_usuario_atual()) {
        case (new \App\src\Usuarios\Admins())->getFuncao() :
            return redirect()->route('admin.pacotes.index');
        default :
        {
            auth()->logout();
            modalErro('Função do usuário não encontrado.');
            return redirect('/');
        }
    }
})->middleware(['auth', 'verified'])->name('home');

Route::any('dashboard', function () {
    return redirect('/');
});
