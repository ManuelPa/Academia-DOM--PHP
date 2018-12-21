<?php
include_once 'ConectarBBDD.php';

global $conexion;

$consultaempresa = "SELECT * FROM empresa";
$resultadoempresa = $conexion->query($consultaempresa);
if ($resultadoempresa) {
    $empresa = $resultadoempresa->fetch_array();
    echo json_encode($empresa);
}
