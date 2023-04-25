<?php

namespace App\src\Pacotes;

use App\Models\Pacotes;

class CodigoPacote
{
    private string $prefix = 'PCT';
    public function gerar(): string
    {
        $id = (new Pacotes())->newQuery()->latest('id')->first();

        return $this->prefix . ($id->id ?? 0) + 1;
    }
}
