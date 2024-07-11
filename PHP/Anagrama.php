<?php

// Dos cadena de texto son anagramas cuando contienen el mismo numero de caracteres conla misma frecuencia pero en diferente orden




function isAnagram($str1, $str2) {
    
    
    // Eliminar espacios y convertir a minúsculas
    $str1 = strtolower(str_replace(' ', '', $str1));
    $str2 = strtolower(str_replace(' ', '', $str2));
    
    // Verificar si tienen la misma longitud
    if (strlen($str1) !== strlen($str2)) {
        return false;
    }
    
    // Convertir las cadenas en arrays y ordenarlos
    $arr1 = str_split($str1);
    $arr2 = str_split($str2);
    sort($arr1);
    sort($arr2);
    
    // Comparar los arrays ordenados
    return $arr1 === $arr2;
  
}


$resultado1 = isAnagram("GENARO", "ADAMA");
echo $resultado1 ? "Son anagramas" : "No son anagramas";

