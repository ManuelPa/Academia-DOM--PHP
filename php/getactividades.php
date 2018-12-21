<?php

include_once 'ConectarBBDD.php';

global $conexion;

$consulta = "SELECT * FROM actividades";
$resultado = $conexion->query($consulta);
if ($resultado) {
    $fila = $resultado->fetch_array();
    $actividades = [];
    while ($fila) {
        array_push($actividades, $fila);
        $fila = $resultado->fetch_array();
    }
    echo json_encode($actividades);
}
$conexion->close();

