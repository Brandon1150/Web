'use strict'

/*
Calculadora
Pida dos números por pantalla
Si metemos datos invalidos que los vuelva a pedir
En el cuerpo de la página,en una alerte y por consola el resultado de sumar,restar,multiplicar y dividir dos cifras
*/

var numero1 = parseInt(prompt("Introduce primer numero", 0));
var numero2 = parseInt(prompt("Introduce segundo numero", 0));


while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt("Introduce primer numero", 0));
    numero2 = parseInt(prompt("Introduce segundo numero", 0));
}

var resultado = "La suma es:" + (numero1 + numero2) + "<br/>" +
    "La resta es:" + (numero1 - numero2) + "<br/>" +
    "La multiplicación es:" + (numero1 * numero2) + "<br/>" +
    "La división es:" + (numero1 / numero2) + "<br/>";

var resultadoCMD = "La suma es:" + (numero1 + numero2) + "\n" +
    "La resta es:" + (numero1 - numero2) + "\n" +
    "La multiplicación es:" + (numero1 * numero2) + "\n" +
    "La división es:" + (numero1 / numero2) + "\n";


document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);