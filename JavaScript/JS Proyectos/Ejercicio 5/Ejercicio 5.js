'use strict'


/*
Muestra todos lo números divisores de un número introducido por pantalla
*/

var numero = parseInt(prompt("Dame un número", 1));


document.write("<h1>De "+ numero + " estos son sus divisores: </h1>")
for (var i = 1; i <= numero ; i++) {

    if (numero % i == 0) {
        console.log("Divisor " + i);

    }

    document.write(i + "<br/>");
}