<?php

namespace App\src\Usuarios;

class Admins
{
    private string $tipo = 'admin';

    public function getFuncao(): string
    {
        return $this->tipo;
    }
}
