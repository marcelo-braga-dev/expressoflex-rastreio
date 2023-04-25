<?php

namespace App\Http\Controllers\Admin\Sinistro;

use App\Http\Controllers\Controller;
use App\Models\Pacotes;
use App\Models\Sinistros;
use App\Models\SinistrosAnexos;
use App\Models\SinistrosHistoricos;
use App\Models\SinistrosStatus;
use App\src\Pacotes\CodigoSinistro;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SinistroController extends Controller
{
    public function index()
    {
        $sinistros = (new Sinistros())->sinistros();
        $status = (new SinistrosStatus())->status();

        return Inertia::render('Admin/Sinistro/Index',
            compact('sinistros', 'status'));
    }

    public function show($id)
    {
        $pacote = (new Pacotes())->find($id);
        $sinistro = (new Sinistros())->find($id);
        $historico = (new SinistrosHistoricos())->historico($id);
        $status = (new SinistrosStatus())->status();
        $anexos = (new SinistrosAnexos())->anexos($id);

        return Inertia::render('Admin/Sinistro/Show',
            compact('pacote', 'historico', 'status', 'sinistro', 'anexos'));
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
        $codigo = (new CodigoSinistro())->gerar();

        $id = (new Sinistros())->create($request, $codigo);
        (new SinistrosHistoricos())->create($id, $request->status);

        (new SinistrosAnexos())->create($id, $request);

        modalSucesso('Informações Cadastradas com Sucesso!');
        return redirect()->route('admin.sinistros.index');
    }

    public function updateStatus($id, $status)
    {
        (new Sinistros())->updateStatus($id, $status);
        (new SinistrosHistoricos())->create($id, $status);

        modalSucesso('Status Atualizado');
    }

    public function showPacote($id)
    {
        $id = (new Sinistros())->idSinistroPeloPacote($id);

        return redirect()->route('admin.sinistros.show', $id);
    }

    public function destroy($id)
    {
        (new Sinistros())->remover($id);

        modalSucesso('Sinistro removido com sucesso!');
        return redirect()->route('admin.sinistros.index');
    }
}
