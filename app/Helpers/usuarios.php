<?php
if(!function_exists('id_usuario_atual')) {
    function id_usuario_atual() {
        return auth()->id();
    }
}

if(!function_exists('funcao_usuario_atual')) {
    function funcao_usuario_atual() {
        return auth()->user()->funcao;
    }
}
