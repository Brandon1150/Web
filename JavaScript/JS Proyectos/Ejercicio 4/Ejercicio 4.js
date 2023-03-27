'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/


var numero1 = parseInt(prompt("Introduce primer numero"));
var numero2 = parseInt(prompt("Introduce segundo numero"));

console.log(numero1, numero2);


while (numero1 < numero2) {

    numero1++;

    if (numero1 % 2 != 0) {
        console.log("El " + numero1 + " es impar");
    } else {
        console.log("El" + numero1 + " es par");


    }
}