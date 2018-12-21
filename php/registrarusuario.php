<?php

$usuario = $_REQUEST["user"];
$user = json_decode($usuario);

$nombre = $user->usuario;
$apellidos = $user->apellidos;
$clave = $user->clave;
$email = $user->email;
$dni = $user->dni;
$localidad = $user->localidad;

include_once 'ConectarBBDD.php';

global $conexion;

$consulta = "INSERT INTO usuario (idusuario, nombre, email, apellidos, dni, localidad, clave)
SELECT null, '$nombre', '$email', '$apellidos', '$dni', '$localidad', '$clave'
WHERE NOT EXISTS (SELECT nombre and apellidos FROM usuario WHERE nombre='$nombre' and apellidos='$apellidos');";
$resultado = $conexion->query($consulta);

$A = $conexion->affected_rows;
if ($A == 1) {
    $destinatatio = $email;
    $asunto = "Confirmacion de e-mail, academia Delox";
    $cuerpo = "<html> 
                <head> 
                    <title>Confirmacion de email</title> 
                </head> 
                <body> 
                <h2>Nos complace saber que ha sido dado de alta en nuestra academia de cursos online.</h2>
                    <p>Por ello le presentamos a continuacion su usuario y clave: </p>
                    <ul>
                        <li>Usuario = $nombre.</li>
                        <li>Clave = $clave.</li>
                    </ul>
                    <p>Atentamente el Equipo Directivo de Delox Accademy.</p>
                    <p>Saludos.</p>
                </body> 
                </html>";
//para el envío en formato HTML 
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
//dirección del remitente 
    $headers .= "From: Academia Delox <academia@delox.es>\r\n";
    mail($destinatatio, $asunto, $cuerpo, $headers);
    echo 'El ususario ha sido registrado correctamente, le hemos enviado un email con su usuario y contraseña. Ahora solo deberá iniciar sesión.';
    $conexion->commit();
} else {
    echo "Error en el registro del usuario, por duplicacion de nombre y apellidos.";
    $conexion->rollback();
}
$conexion->close();

