<?php   

session_start();

// $miVariableInt = 1;
// $miVariableArray = implode(',',["uno","dos","tres","cuatro"]);
$miVariableArray = implode(',',[1,2,3,4]);

$cadena = "Hola,Mundo,!";

$array =implode('<br>',explode(",", $cadena));


// $miVariable = "Soy la variable normal";


$_SESSION["Sesion"] = "Soy la variable de que vive eternamente";

// echo $miVariableInt."<br>";
// echo $miVariable."<br>";
echo $miVariableArray."<br>";
echo $array;
echo $_SESSION["Sesion"];

// echo gettype($miVariableInt); 