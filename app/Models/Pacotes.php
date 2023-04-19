<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pacotes extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_vendedor',
        'endereco_destinatario',
        'identificacao',
        'data',
        'status',
        'status_data',
        'anotacoes',
        'sinistro',
    ];

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'nome_vendedor' => $dados->nome_vendedor,
                'endereco_destinatario' => $dados->endereco_destinatario,
                'identificacao' => $dados->identificacao,
                'data' => $dados->data,
                'status' => $dados->status,
                'anotacoes' => $dados->anotacoes,
                'status_data' => now()
            ]);
    }

    public function pacotes()
    {
        $status = (new PacotesStatus())->nomes();

        return $this->newQuery()
            ->orderByDesc('created_at')
            ->get()
            ->transform(function ($item) use ($status) {
                return $this->dados($item, $status);
            });
    }

    public function find($id)
    {
        $status = (new PacotesStatus())->nomes();
        $dados = $this->newQuery()->find($id);

        return $this->dados($dados, $status);
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

    private function dados($item, $status): array
    {
        return [
            'id' => $item->id,
            'vendedor' => $item->nome_vendedor,
            'endereco' => $item->endereco_destinatario,
            'identificacao' => $item->identificacao,
            'data' => $item->data,
            'status_id' => $item->status,
            'status' => $status[$item->status] ?? '-',
            'anotacoes' => $item->anotacoes,
            'sinistro' => $item->sinistro,
            'data_cadastro' => date('d/m/y H:i', strtotime($item->created_at)),
            'status_data' => date('d/m/y H:i', strtotime($item->status_data)),
        ];
    }
}
