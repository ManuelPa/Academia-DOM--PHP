<?php

include_once 'ConectarBBDD.php';

$idtema = $_REQUEST["idtema"];

global $conexion;

$consultaunidades = "SELECT * FROM unidad WHERE idtema = $idtema";
$resultadounidades = $conexion->query($consultaunidades);
if ($resultadounidades) {
    $fila = $resultadounidades->fetch_array();
    $unidades = [];
    while ($fila) {
        array_push($unidades, $fila);
        $fila = $resultadounidades->fetch_array();
    }
    echo json_encode($unidades);
}else{
    echo json_encode("No hay unidades sobre ese tema en la base de datos.");
}