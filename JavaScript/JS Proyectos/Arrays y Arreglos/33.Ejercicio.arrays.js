'use strict'

/*
1-Pida 6 números por pantalla y los meta en un array
2-Mostrar el array entero(todos lo elementos)en el cuerpo de la página y en la consola
3-Ordenar y mostrarlo
4-Invertir su orden y mostrarlo
5-Mostrar cuantos elementos tiene el array 
6-Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorará el uso de funciones)
*/

//ALTERNATIVA AL EJERCICIO
// var numeros = new Array(6);
//PROCEDIMIENTO 1
var numeros = new Array(6);

for(var i = 0;i <= 5;i++){
    numeros[i] = parseInt(prompt("Introduce un número",0));
    //ALTERNATIVA AL EJERCICIO
    // numeros.push(parseInt(prompt("Introduce un número",0)));
}

//Mostrar el cuerpo de la página
document.writre


//Mostrar el array por la consola
console.log(numeros);
