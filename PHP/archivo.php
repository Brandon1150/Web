<?php
$nombre_archivo = "archivo.txt";
$leyenda = "aceptado";

if (file_exists($nombre_archivo)) {
    // El archivo existe, así que abrimos el archivo en modo de escritura al final y agregamos la leyenda
    $archivo = fopen($nombre_archivo, "a");
    fwrite($archivo, $leyenda);
    fclose($archivo);
    echo "Se ha agregado la leyenda al archivo.";
} else {
    echo "El archivo no existe.";
}

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

?>
