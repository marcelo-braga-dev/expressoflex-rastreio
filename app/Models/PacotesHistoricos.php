<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PacotesHistoricos extends Model
{
    use HasFactory;

    protected $fillable = [
        'pacotes_id',
        'status_id',
        'anotacoes'
    ];

    public function create($idPacote, $idStatus)
    {
        $this->newQuery()
            ->create([
                'pacotes_id' => $idPacote,
                'status_id' => $idStatus
            ]);
    }

    public function historico($id)
    {
        $status = (new PacotesStatus())->nomes();

        return $this->newQuery()
            ->where('pacotes_id', $id)
            ->get()
            ->transform(function ($item) use ($status) {
                return [
                    'id' => $item->id,
                    'data' => date('d/m/y H:i:s', strtotime($item->created_at)),
                    'status' => $status[$item->status_id] ?? '-'
                ];
            });
    }
}
