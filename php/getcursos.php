<?php

include_once 'ConectarBBDD.php';

global $conexion;

$consulta = "SELECT * FROM curso";
$resultado = $conexion->query($consulta);
if ($resultado) {
    $fila = $resultado->fetch_array();
    $cursos = [];
    while ($fila) {
        array_push($cursos, $fila);
        $fila = $resultado->fetch_array();
    }
    echo json_encode($cursos);
}
$conexion->close();

