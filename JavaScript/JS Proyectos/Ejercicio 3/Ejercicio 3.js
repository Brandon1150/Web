'use strict'

/*
Crear un programa que muestre todos los numeros entre dos números introducidos por el usuario
*/


var numero1 = parseInt(prompt("Introduce primer numero"));
var numero2 = parseInt(prompt("Introduce segundo numero"));

console.log(numero1, numero2);


document.write("<h1>De " + numero1 + " a " + numero2 + " estan estos números:</h1>")
for (var i = numero1; i <= numero2; i++) {
    document.write(i + "<br/>");

    debugger;
}
