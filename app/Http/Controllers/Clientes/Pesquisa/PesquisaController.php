<?php

namespace App\Http\Controllers\Clientes\Pesquisa;

use App\Http\Controllers\Controller;
use App\Models\Pacotes;
use App\Models\PacotesHistoricos;
use App\Models\Sinistros;
use App\Models\SinistrosHistoricos;
use App\Services\PesquisasService\PacotesPesquisaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PesquisaController extends Controller
{
    public function index()
    {
        return Inertia::render('Clientes/Pesquisa/Index');
    }

    public function mostrar($id)
    {
        $sinistro = [];
        $sinistroHistorico = [];

        $pacote = (new Pacotes())->find($id);
        $historicoPacote = (new PacotesHistoricos())->historico($id);

        if ($pacote['sinistro']) {
            $sinistro = (new Sinistros())->dadosPeloIdPacote($pacote['id']);
            $sinistroHistorico = (new SinistrosHistoricos())->historico($sinistro['id']);
        }


        return Inertia::render('Clientes/Pesquisa/Mostrar',
            compact('pacote', 'historicoPacote', 'sinistro', 'sinistroHistorico'));
    }

    public function pesquisar(Request $request)
    {
        $dados = (new PacotesPesquisaService())->pesquisar($request->dados_pesquisa);

        if (count($dados) == 0) return redirect()->back()->withErrors('Nenhuma informação encontrada!');

        if (($dados['id'] ?? null)) return redirect()->route('clientes.mostrar', $dados);

        if (count($dados) == 1) return redirect()->route('clientes.mostrar', $dados[0]['id']);

        if (count($dados) > 1) return Inertia::render('Clientes/Pesquisa/Encontrados', compact('dados'));

        return redirect()->back()->withErrors('Pesquise novamente.');
    }
}
