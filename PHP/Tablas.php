<?php

//Declaro variable con el array de numeros a recorrer
$multiplicando = range(1, 10);
$multiplicador = range(1, 10);

//Inicio del ciclo para recorrer y declaro variable(para el multiplicando)
foreach ($multiplicando as $numero_multiplicando) {

    echo 'Tabla del ' . $numero_multiplicando . '<br>';

    //Inicio del ciclo para recorrer y declaro variable(para el multiplicador)

    foreach ($multiplicador as $numero_multiplicador) {

        echo $numero_multiplicando . 'X' . $numero_multiplicador . '=' . ($numero_multiplicando * $numero_multiplicador) . '<br>';
    }

    echo '<br>';

}



















// FORMAS DE CORRER EL CICLO

// for ($i = 1; $i <= 10; $i++) {
//     echo $i .'-'.'BUCLE FOR'. "<br>";
// }



// $i = 1;
// while ($i <= 10) {
//     echo $i .'-'.'BUCLE WHILE'. "<br>";
//     $i++;
// }



// $i = 1;
// do {
//     echo $i .'-'.'BUCLE DO WHILE'. "<br>";
//     $i++;
// } while ($i <= 10);