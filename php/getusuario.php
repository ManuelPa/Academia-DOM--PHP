<?php

$nombre = $_REQUEST["nombre"];
$clave = $_REQUEST["clave"];

include_once 'ConectarBBDD.php';

global $conexion;

$consultausuario = "SELECT * FROM usuario WHERE nombre='$nombre' and clave='$clave'";
$resultadou = $conexion->query($consultausuario);
if ($resultadou) {
    $alumno = $resultadou->fetch_array();
    echo json_encode($alumno);
}