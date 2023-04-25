<?php

namespace Database\Seeders;

use App\Models\PacotesStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PacotesStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            ['valor' => 'Em Rota', 'descricao' => 'Pacote em rota de entrega.'],
            ['valor' => 'Não Atende', 'descricao' => 'Destinatário ausente.'],
            ['valor' => 'Troca', 'descricao' => 'Troca.'],
            ['valor' => 'Cancelado', 'descricao' => 'Cancelado.'],
            ['valor' => 'S/ Informação', 'descricao' => 'Sem informações.'],
            ['valor' => 'Não Estava no Local', 'descricao' => 'Não Estava no Local.'],
            ['valor' => 'Em Rota Novamente', 'descricao' => 'Em Rota Novamente.'],
            ['valor' => 'Mudou-se', 'descricao' => 'Destinatário Mudou-se.'],
            ['valor' => 'Pacote a caminho do vendedor', 'descricao' => 'Pacote a caminho do vendedor.'],
            ['valor' => 'Sinistro', 'descricao' => 'Pacote com Sinistro.'],
        ];

        foreach ($items as $item) {
            (new PacotesStatus())->newQuery()
                ->create([
                    'valor' => $item['valor'],
                    'descricao' => $item['descricao'],
                ]);
        }
    }
}
