<?php

namespace App\Http\Controllers\Admin\Pacotes;

use App\Http\Controllers\Controller;
use App\Models\Pacotes;
use App\Models\PacotesHistoricos;
use App\Models\PacotesStatus;
use App\src\Pacotes\CodigoPacote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PacotesController extends Controller
{
    public function index()
    {
        $pacotes = (new Pacotes())->pacotes();
        $status = (new PacotesStatus())->status();

        return Inertia::render('Admin/Pacotes/Index',
            compact('pacotes', 'status'));
    }

    public function show($id)
    {
        $pacote = (new Pacotes())->find($id);
        $historico = (new PacotesHistoricos())->historico($id);

        return Inertia::render('Admin/Pacotes/Show',
            compact('pacote', 'historico'));
    }

    public function create()
    {
        $status = (new PacotesStatus())->status();

        return Inertia::render('Admin/Pacotes/Create', compact('status'));
    }

    public function store(Request $request)
    {
        $cod = (new CodigoPacote())->gerar();

        $id = (new Pacotes())->create($request, $cod);
        (new PacotesHistoricos())->create($id, $request->status);

        modalSucesso('Pacote Cadastrado com Sucesso!');
        return redirect()->route('admin.pacotes.index');
    }

    public function updateStatus($id, $status)
    {
        (new Pacotes())->updateStatus($id, $status);
        (new PacotesHistoricos())->create($id, $status);

        modalSucesso('Status Atualizado');
    }
}
