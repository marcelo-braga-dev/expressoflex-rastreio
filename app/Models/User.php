<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\src\Usuarios\Admins;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'funcao',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function usuarios()
    {
        return $this->newQuery()
            ->get()
            ->transform(function ($item) {
                return [
                    'id' => $item->id,
                    'nome' => $item->name,
                    'email' => $item->email,
                ];
            });
    }

    public function find($id)
    {
        $item = $this->newQuery()->find($id);

        return [
            'id' => $item->id,
            'nome' => $item->name,
            'email' => $item->email,
        ];
    }

    public function atualizarSenha($id, $password)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'password' => Hash::make($password),
            ]);
    }

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'name' => $dados->nome,
                'email' => $dados->email,
                'password' => Hash::make($dados->password),
                'funcao' => (new Admins())->getFuncao()
            ]);
    }

    public function atualizar($id, $dados)
    {
        try {
            $this->newQuery()
                ->find($id)
                ->update([
                    'name' => $dados->nome,
                    'email' => $dados->email
                ]);
        } catch (QueryException) {
            modalErro('Email em uso por outro usuário!');
        }
    }
}
