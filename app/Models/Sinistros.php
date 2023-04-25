<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sinistros extends Model
{
    use HasFactory;

    protected $fillable = [
        'pacotes_id',
        'reembolso',
        'codigo',
        'motoboy',
        'status',
        'data',
        'anotacoes',
    ];

    public function create($dados, string $codigo)
    {
        $id = $this->newQuery()
            ->create([
                'pacotes_id' => $dados->id_pacote,
                'reembolso' => convert_money_float($dados->reembolso),
                'codigo' => $codigo,
                'motoboy' => $dados->motoboy,
                'status' => $dados->status,
                'data' => $dados->data,
                'anotacoes' => $dados->anotacoes,
            ])->id;

        (new Pacotes())->updateSinistro($dados->id_pacote, true);

        return $id;
    }

    public function sinistros()
    {
        $status = (new SinistrosStatus())->nomes();

        return $this->newQuery()
            ->orderByDesc('id')
            ->get()
            ->transform(function ($item) use ($status) {
                return $this->dados($item, $status);
            });
    }

    public function dadosPeloIdPacote($idPacote)
    {
        $status = (new SinistrosStatus())->nomes();

        $dados = $this->newQuery()
            ->where('pacotes_id', $idPacote)
            ->first();

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

    public function find($id)
    {
        $dados = $this->newQuery()->find($id);
        $status = (new SinistrosStatus())->nomes();

        return [
            'id_pacote' => $dados->pacotes_id,
            'motoboy' => $dados->motoboy,
            'reembolso' => convert_float_money($dados->reembolso),
            'data' => date('d/m/y H:i', strtotime($dados->data)),
            'anotacoes' => $dados->anotacoes,
            'status' => $status[$dados->status] ?? '-',
            'status_id' => $dados->status,
        ];
    }

    public function idSinistroPeloPacote($idpacote)
    {
        return $this->newQuery()
            ->where('pacotes_id', $idpacote)
            ->first('pacotes_id')->pacotes_id;
    }

    public function remover($id)
    {
        $dados = $this->find($id);

        $this->newQuery()
            ->find($id)
            ->delete();
        (new Pacotes())->updateSinistro($dados['id_pacote'], false);
    }

    private function dados($item, $status): array
    {
        return [
            'id' => $item->id,
            'codigo' => $item->codigo,
            'reembolso' => convert_float_money($item->reembolso),
            'vendedor' => (new Pacotes())->newQuery()->find($item->pacotes_id)->nome_vendedor ?? '-',
            'motoboy' => $item->motoboy,
            'status' => $status[$item->status] ?? '-',
            'data' => date('d/m/y H:i', strtotime($item->data)),
            'anotacoes' => $item->anotacoes,
        ];
    }

    public function getPacotePeloCodigo($dado)
    {
        $sinistro = $this->newQuery()
            ->where('codigo', $dado)
            ->first();
        if (!$sinistro) return [];

        return (new Pacotes())->find($sinistro->pacotes_id);
    }
}
