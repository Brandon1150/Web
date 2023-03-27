'use strict'

/*
Utilizando un bucle,mostrar la sua y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado
*/


var suma = 0;
var contador = 0;


do {
    var numero = parseInt(prompt("Introduce numeros hasta poner uno negativo", 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        // suma += numero; es lo mismo que arriba
        contador++;
    }

    console.log(suma);
    console.log(contador);


} while (numero >= 0){
    alert("La suma de todos los números es:" + suma);
    alert("La media de todos los números es;" + (suma/contador));
}