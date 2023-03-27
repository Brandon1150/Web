'use strict'


/*
Programa que nos diga si un número es par o impar
1.Pedirlo por ventana prompt
2.Si no es valido que nos pida el número de nuevo
*/

var numero = parseInt(prompt("Dame un número", 0));


while (isNaN(numero)) {
    numero = parseInt(prompt("Dame un número", 0));
}

if(numero % 2 == 0){
alert("Es par");

}else{
    alert("Es impar");
}
