<?php

include_once 'ConectarBBDD.php';

$idcurso = $_REQUEST["idcurso"];
$usuario = $_REQUEST["usuario"];
$clave = $_REQUEST["clave"];

global $conexion;

$consultausuario = "SELECT idusuario FROM usuario WHERE nombre='$usuario' AND clave='$clave'";
$resultadou = $conexion->query($consultausuario);
if ($resultadou) {
    $idusuario = $resultadou->fetch_array();
    $consultacurso = "SELECT * FROM usuariocurso WHERE idusuario = $idusuario[0] AND idcurso = $idcurso";
    $resultadoc = $conexion->query($consultacurso);
    if ($resultadoc) {
        $filausuariocurso = $resultadoc->fetch_array();
        echo json_encode($filausuariocurso);
    }else{
        echo json_encode("");
    }
}