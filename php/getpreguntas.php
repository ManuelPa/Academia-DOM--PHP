<?php

include_once 'ConectarBBDD.php';

$idcurso = $_REQUEST["idcurso"];
$usuario = $_REQUEST["usuario"];
$clave = $_REQUEST["clave"];

global $conexion;
$consultacurso = "SELECT * FROM pregunta WHERE idcurso = $idcurso ORDER BY RAND() LIMIT 5";
$resultadoc = $conexion->query($consultacurso);
if ($resultadoc) {
    $filapregunta = $resultadoc->fetch_array();
    $preguntas = [];
    while ($filapregunta) {
        array_push($preguntas, $filapregunta);
        $filapregunta = $resultadoc->fetch_array();
    }
    echo json_encode($preguntas);
} else {
    echo json_encode("No hay preguntas sobre ese curso.");
}
