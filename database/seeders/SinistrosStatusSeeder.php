<?php

namespace Database\Seeders;

use App\Models\SinistrosStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SinistrosStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            ['nome' => 'Sinistro Aprovado.', 'descricao' => 'Sinistro Aprovado.'],
            ['nome' => 'Sinistro Negado.', 'descricao' => 'Sinistro Negado.'],
            ['nome' => 'Sinistro em Andamento.', 'descricao' => 'Sinistro em Andamento.'],
            ['nome' => 'Sinistro Finalizado com Reembolso.', 'descricao' => 'Sinistro Finalizado com Reembolso.'],
            ['nome' => 'Sinistro Finalizado sem Reembolso.', 'descricao' => 'Sinistro Finalizado sem Reembolso.'],
            ['nome' => 'Sinistro em Análise.', 'descricao' => 'Sinistro em Análise.'],
            ['nome' => 'Aguardando Envio do Produto Danificado.', 'descricao' => 'Aguardando Envio do Produto Danificado.'],
        ];

        foreach ($items as $item) {
            (new SinistrosStatus())->newQuery()
                ->create([
                    'nome' => $item['nome'],
                    'descricao' => $item['descricao'],
                ]);
        }
    }
}
