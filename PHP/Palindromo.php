<?php



// Slicing de PHP
function esPalindromo($texto) {
    // Eliminar espacios y convertir a minúsculas
    $texto = strtolower(str_replace(' ', '', $texto));
    
    // Comparar la cadena con su versión invertida
    return $texto === strrev($texto);
}


//Ciclo normal con PHP

// function esPalindromo($texto) {
//     // Eliminar espacios y convertir a minúsculas
//     $texto = strtolower(str_replace(' ', '', $texto));
    
//     // Obtener la longitud del texto
//     $longitud = strlen($texto);
    
//     // Comparar caracteres desde ambos extremos hacia el centro
//     for ($i = 0; $i < $longitud / 2; $i++) {
//         if ($texto[$i] !== $texto[$longitud - 1 - $i]) {
//             return false;
//         }
//     }
    
//     // Si llegamos aquí, es un palíndromo
//     return true;
// }





// $texto1 = "Anita lava la tina";
// $texto2 = "Hola mundo";

// if (esPalindromo($texto1)) {
//     echo "'$texto1' es un palíndromo.\n";
// } else {
//     echo "'$texto1' no es un palíndromo.\n";
// }

// if (esPalindromo($texto2)) {
//     echo "'$texto2' es un palíndromo.\n";
// } else {
//     echo "'$texto2' no es un palíndromo.\n";
// }


// $texto = "Python";
// // Equivalente a texto[0:3] en Python
// echo substr($texto, 0, 3);  // Imprime "Pyt"

// // Equivalente a texto[1:5] en Python
// echo substr($texto, 1, 4);  // Imprime "ytho"

// // Equivalente a texto[-3:] en Python
// echo substr($texto, -3);    // Imprime "hon"
