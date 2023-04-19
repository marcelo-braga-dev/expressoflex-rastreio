<?php

namespace App\Http\Controllers\Admin\Sinistro;

use App\Http\Controllers\Controller;
use App\Models\Pacotes;
use App\Models\Sinistros;
use App\Models\SinistrosHistoricos;
use App\Models\SinistrosStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SinistroController extends Controller
{
    public function index()
    {
        $sinistros = (new Sinistros())->sinistros();

        return Inertia::render('Admin/Sinistro/Index',
            compact('sinistros'));
    }

    public function show($id)
    {
        $pacote = (new Pacotes())->find($id);
        $sinistro = (new Sinistros())->find($id);
        $historico = (new SinistrosHistoricos())->historicos($id);
        $status = (new SinistrosStatus())->status();

        return Inertia::render('Admin/Sinistro/Show',
            compact('pacote', 'historico', 'status', 'sinistro'));
    }

    public function create(Request $request)
    {
        $pacote = (new Pacotes())->find($request->id);
        $status = (new SinistrosStatus())->status();

        return Inertia::render('Admin/Sinistro/Create',
            compact('pacote', 'status'));
    }

    public function store(Request $request)
    {
        (new Sinistros())->create($request);

        modalSucesso('Informações Cadastradas com Sucesso!');
        return redirect()->route('admin.sinistros.index');
    }

    public function updateStatus($id, $status)
    {
        (new Sinistros())->updateStatus($id, $status);
        (new SinistrosHistoricos())->create($id, $status);

        modalSucesso('Status Atualizado');
    }
}
