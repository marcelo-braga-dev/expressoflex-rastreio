<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SinistrosHistoricos extends Model
{
    use HasFactory;

    protected $fillable = [
        'sinistros_id',
        'status_id',
        'anotacoes'
    ];

    public function historico($id)
    {
        $status = (new SinistrosStatus())->nomes();

        return $this->newQuery()
            ->where('sinistros_id', $id)
            ->orderByDesc('id')
            ->get()
            ->transform(function ($item) use ($status) {
                return [
                    'id' => $item->id,
                    'data' => date('d/m/y H:i:s', strtotime($item->created_at)),
                    'status' => $status[$item->status_id] ?? '-'
                ];
            });
    }

    public function create($id, $status)
    {
        $this->newQuery()
            ->create([
                'sinistros_id' => $id,
                'status_id' => $status
            ]);
    }
}
