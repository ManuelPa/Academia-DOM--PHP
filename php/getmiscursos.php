<?php

include_once 'ConectarBBDD.php';

$nombre = $_REQUEST["usuario"];
$clave = $_REQUEST["clave"];

global $conexion;

$consultausuario = "SELECT idusuario FROM usuario WHERE nombre='$nombre' and clave='$clave'";
$resultadou = $conexion->query($consultausuario);
if ($resultadou) {
    $idusuario = $resultadou->fetch_array();
    $consultacurso = "SELECT idcurso FROM usuariocurso WHERE idusuario = $idusuario[0]";
    $resultadoc = $conexion->query($consultacurso);
    if ($resultadoc) {
        $filaidcurso = $resultadoc->fetch_array();
        $idscurso = [];
        while ($filaidcurso) {
            array_push($idscurso, $filaidcurso);
            $filaidcurso = $resultadoc->fetch_array();
        }
        $cursosuscritos = [];
        foreach ($idscurso as $value) {
            $consultadatosc = "SELECT * FROM curso WHERE idcurso = $value[idcurso]";
            $resultadodatos = $conexion->query($consultadatosc);
            if ($resultadodatos) {
                $fila = $resultadodatos->fetch_array();
                while ($fila) {
                    array_push($cursosuscritos, $fila);
                    $fila = $resultadodatos->fetch_array();
                }
            }
        }
        echo json_encode($cursosuscritos);
    } else {
        echo json_encode("Usted no esta suscrito a ningun curso.");
    }
}
$conexion->close();
