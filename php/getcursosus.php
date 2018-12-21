<?php

include_once 'ConectarBBDD.php';

$idcurso = $_REQUEST["curso"];

global $conexion;

$consulta = "SELECT * FROM curso WHERE idcurso = '$idcurso'";
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