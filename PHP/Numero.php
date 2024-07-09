<?php

function encontrarFracciones($objetivo, $limiteMaximo) {
    $fracciones = [];
    
    for ($denominador = 1; $denominador <= $limiteMaximo; $denominador++) {
        $numerador = $objetivo * $denominador;
        
        if (abs($numerador - round($numerador)) < 0.00001) {
            $numerador = round($numerador);
            
            // Verificar si la fracción ya está simplificada
            if (gcd($numerador, $denominador) == 1) {
                $fracciones[] = [$numerador, $denominador];
            }
        }
    }
    
    return $fracciones;
}

function gcd($a, $b) {
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}

$objetivo = 1.4;
$limiteMaximo = 1000; // Ajusta este valor según sea necesario

$fracciones = encontrarFracciones($objetivo, $limiteMaximo);

echo "Fracciones que dan $objetivo:\n";
foreach ($fracciones as $fraccion) {
    echo "{$fraccion[0]}/{$fraccion[1]}\n";
}

?>