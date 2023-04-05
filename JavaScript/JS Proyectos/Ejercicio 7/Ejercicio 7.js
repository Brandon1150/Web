'use strict'


/*
Tabla de multiplicar de un número introducido por pantalla
*/

var numero = parseInt(prompt("Dame un número", 1));

document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(numero + "x" + i + "=" + (i * numero) + "<br/>");
}


//Todas las tablas 

for (var c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del " + c + "</h1>");
    for (var i = 1; i <= 10; i++) {
        document.write(c + "x" + i + "=" + (i * c) + "<br/>");
    }
}