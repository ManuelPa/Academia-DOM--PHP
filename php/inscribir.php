<?php

$idcurso = $_REQUEST["curso"];
$nombre = $_REQUEST["usuario"];
$clave = $_REQUEST["clave"];

include_once 'ConectarBBDD.php';

global $conexion;

$consultausuario = "SELECT idusuario FROM usuario WHERE nombre='$nombre' and clave='$clave'";
$resultadou = $conexion->query($consultausuario);
if ($resultadou) {
    $idusuario = $resultadou->fetch_array();
    $consulta = "INSERT INTO usuariocurso (idusuario, idcurso, nota, oportunidades, aprobado)
                SELECT $idusuario[0], $idcurso, 0, 0, 'N' 
                WHERE NOT EXISTS (SELECT idusuario and idcurso FROM usuariocurso WHERE idusuario=$idusuario[0] and idcurso=$idcurso);";
    $resultado = $conexion->query($consulta);
    $A = $conexion->affected_rows;
    if ($A == 1) {
        echo 'El ususario ha sido registrado correctamente en el curso seleccionado.';
        $conexion->commit();
    } else {
        echo "Error en el registro del usuario en este curso, el usuario ya se encuentra inscrito en este curso.";
        $conexion->rollback();
    }
    $conexion->close();
}




