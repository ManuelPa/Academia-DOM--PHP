<?php

$eval = $_REQUEST["evaluacion"];
$evaluacion = json_decode($eval);

$nota = $evaluacion->nota;
$curso = $evaluacion->curso;
$usuario = $evaluacion->usuario;
$clave = $evaluacion->clave;

include_once 'ConectarBBDD.php';

global $conexion;

$consultausuario = "SELECT idusuario FROM usuario WHERE nombre='$usuario' and clave='$clave'";
$resultadou = $conexion->query($consultausuario);
if ($resultadou) {
    $idusuario = $resultadou->fetch_array();
    if ($nota >= 5) {
        $update = "UPDATE usuariocurso SET nota = $nota , oportunidades = oportunidades + 1 , aprobado = 'Y' WHERE idusuario = $idusuario[0] AND idcurso = $curso";
        $resultadoup = $conexion->query($update);
        if ($resultadoup && $conexion->affected_rows == 1) {
            echo("Enhorabuena!! Puedes recoger el diploma de este curso.");
        }
    } else {
        $update = "UPDATE usuariocurso SET nota = $nota , oportunidades = oportunidades + 1 , aprobado = 'N' WHERE idusuario = $idusuario[0] AND idcurso = $curso";
        $resultadoup = $conexion->query($update);
        if ($resultadoup && $conexion->affected_rows == 1) {
            echo("Lo sentimos, vuelve a intentarlo otra vez.");
        }        
    }
}