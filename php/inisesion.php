<?php

$usuario = $_REQUEST["user"];
$user = json_decode($usuario);

$nombre = $user->usuario;
$clave = $user->clave;

include_once 'ConectarBBDD.php';

global $conexion;

$consulta = "SELECT * FROM usuario WHERE nombre = '" . $nombre . "' AND clave = '" . $clave . "'";
$resultado = $conexion->query($consulta);
if ($resultado && $conexion->affected_rows == 1) {
    echo "Usuario y clave correcto, bienvenido $nombre.";
} else {
    echo "Error en la contraseña o el usuario en el inicio de sesion.";
}
$conexion->close();

