<?php

namespace App\src\Pacotes;

use App\Models\Pacotes;
use App\Models\Sinistros;

class CodigoSinistro
{
    private string $prefix = 'SIN';

    public function gerar(): string
    {
        $id = (new Sinistros())->newQuery()->latest('id')->first();

        return $this->prefix . ($id->id ?? 0) + 1;
    }
}
