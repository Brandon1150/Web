<?php


function encontrarSoluciones($objetivo, $long) {
    $soluciones = [];
    
    for ($x = 0; $x < $long; $x++) {
        for ($y = 0; $y < $long; $y++) {
            $valorX = $x / ($long - 1) * 10;
            $valorY = $y / ($long - 1) * 10;
            $suma = ($valorX + $valorY) / 10;
            
            if (abs($valorX - $objetivo) < 0.1 || 
                abs($valorY - $objetivo) < 0.1 || 
                abs($suma - $objetivo) < 0.1) {
                $soluciones[] = [$x, $y];
            }
        }
    }
    
    return $soluciones;
}

$objetivo = 1.4;
$long = 10;

$soluciones = encontrarSoluciones($objetivo, $long);

echo "Soluciones para $objetivo en un grid de {$long}x{$long}:\n";
foreach ($soluciones as $solucion) {
    echo "({$solucion[0]}, {$solucion[1]})\n";
}

?>

?>