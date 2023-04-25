<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sinistros', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('pacotes_id');
            $table->float('reembolso', 8, 2);
            $table->string('codigo', 32)->unique();
            $table->string('motoboy');
            $table->integer('status');
            $table->timestamp('data');
            $table->string('anotacoes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sinistros');
    }
};
