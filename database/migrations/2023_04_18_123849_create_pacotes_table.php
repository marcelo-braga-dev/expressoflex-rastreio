<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pacotes', function (Blueprint $table) {
            $table->id();
            $table->string('codigo', 16)->unique();
            $table->string('nome_vendedor');
            $table->string('endereco_destinatario');
            $table->string('identificacao')->nullable();
            $table->timestamp('status_data');
            $table->timestamp('data')->nullable();
            $table->string('status', 32);
            $table->string('anotacoes')->nullable();
            $table->boolean('sinistro')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pacotes');
    }
};
