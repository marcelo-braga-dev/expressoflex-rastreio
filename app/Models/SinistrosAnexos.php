<?php

namespace App\Models;

use App\Services\Imagens\UploadImagensServices;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SinistrosAnexos extends Model
{
    use HasFactory;

    protected $fillable = [
        'sinistros_id',
        'valor'
    ];

    public function create($id, $dados)
    {
        if ($dados->anexos) {
            foreach ($dados->anexos as $item) {
                $url = (new UploadImagensServices())->uploadArray($item, 'sinistros/' . $id);

                $this->newQuery()
                    ->create([
                        'sinistros_id' => $id,
                        'valor' => $url,
                    ]);
            }
        }
    }

    public function anexos($id)
    {
        return $this->newQuery()
            ->where('sinistros_id', $id)
            ->get()
            ->transform(function ($item) {
                return [
                    'id' => $item->id,
                    'url' => asset('storage/' . $item->valor)
                ];
            });
    }
}
