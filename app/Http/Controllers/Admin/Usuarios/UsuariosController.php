<?php

namespace App\Http\Controllers\Admin\Usuarios;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\src\Usuarios\Admins;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UsuariosController extends Controller
{
    public function index()
    {
        $usuarios = (new User())->usuarios();

        return Inertia::render('Admin/Usuarios/Index', compact('usuarios'));
    }

    public function create()
    {
        return Inertia::render('Admin/Usuarios/Create');
    }

    public function edit($id)
    {
        $dados = (new User())->find($id);

        return Inertia::render('Admin/Usuarios/Edit', compact('dados'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ], [
            'email.unique' => 'Email em uso por outro usuário.',
            'email.email' => 'Email inválido.',
            'password.confirmed' => 'Senhas não coincidem. Mínimo 8 caracteres.',
        ]);

        (new User)->create($request);

        modalSucesso('Usuário Cadastrado!');
        return redirect()->route('admin.usuarios.index');
    }

    public function update($id, Request $request)
    {
        (new User())->atualizar($id, $request);

        modalSucesso('Dados atualizados!');
        return redirect()->route('admin.usuarios.index');
    }

    public function atualizarSenha($id, Request $request)
    {
        if ($request->password !== $request->password_confirmation) {
            modalErro('Senhas não coincidem.');
            return redirect()->back();
        }

        (new User())->atualizarSenha($id, $request->password);

        return redirect()->route('admin.usuarios.index');
    }
}
