<?php

namespace App\Services\PesquisasService;

use App\Models\Pacotes;
use App\Models\Sinistros;

class PacotesPesquisaService
{
    public function pesquisar($pesquisa)
    {
        $dados = (new Pacotes())->pesquisar($pesquisa);

        if ($dados->isEmpty()) {
            $dados = (new Sinistros())->getPacotePeloCodigo($pesquisa);
        }

        return $dados;
    }
}
