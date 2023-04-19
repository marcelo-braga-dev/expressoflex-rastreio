<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sinistros extends Model
{
    use HasFactory;

    protected $fillable = [
        'pacotes_id',
        'motoboy',
        'status',
        'data',
        'anotacoes',
    ];

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'pacotes_id' => $dados->id_pacote,
                'motoboy' => $dados->motoboy,
                'status' => $dados->status,
                'data' => $dados->data,
                'anotacoes' => $dados->anotacoes,
            ]);
    }

    public function sinistros()
    {
        $status = (new SinistrosStatus())->nomes();

        return $this->newQuery()
            ->orderByDesc('id')
            ->get()
            ->transform(function ($item) use ($status) {
                return [
                    'id' => $item->id,
                    'vendedor' => (new Pacotes())->newQuery()->find($item->pacotes_id)->nome_vendedor ?? '-',
                    'motoboy' => $item->motoboy,
                    'status' => $status[$item->status] ?? '-',
                    'data' => date('d/m/y H:i', strtotime($item->data)),
                    'anotacoes' => $item->anotacoes,
                ];
            });
    }

    public function updateStatus($id, $status)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'status' => $status,
                'status_data' => now()
            ]);
    }

    public function find($id)
    {
        $dados = $this->newQuery()->find($id);
        $status = (new SinistrosStatus())->nomes();

        return [
            'motoboy' => $dados->motoboy,
            'data' => date('d/m/y H:i', strtotime($dados->data)),
            'anotacoes' => $dados->anotacoes,
            'status' => $status[$dados->status] ?? '-',
            'status_id' => $dados->status,
        ];
    }
}
