<?php

include_once 'ConectarBBDD.php';

$idcurso = $_REQUEST["idcurso"];

global $conexion;

$consultatemas = "SELECT * FROM tema WHERE idcurso = $idcurso";
$resultadotemas = $conexion->query($consultatemas);
if ($resultadotemas) {
    $fila = $resultadotemas->fetch_array();
    $temas = [];
    while ($fila){
        array_push($temas, $fila);
        $fila = $resultadotemas->fetch_array();
    }
    echo json_encode($temas);
}else{
    echo json_encode("Este curso no tiene temas.");
}