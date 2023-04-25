<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PacotesStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'valor',
        'descricao',
    ];

    public function status()
    {
        return $this->newQuery()->get()
            ->transform(function ($item) {
                return [
                    'id' => $item->id,
                    'nome' => $item->valor,
                    'descricao' => $item->descricao
                ];
            });
    }

    public function nomes(): array
    {
        $items = $this->newQuery()
            ->get();

        $response = [];
        foreach ($items as $item) {
            $response[$item->id] = [
                'id' => $item->id,
                'nome' => $item->valor,
                'descricao' => $item->descricao
            ];
        }
        return $response;
    }
}
