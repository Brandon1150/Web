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

function mostrarArray(elementos, textocustom = "") {
    document.write("<h1>Contenido del array " + textocustom + "</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("<ul>")

}


//ALTERNATIVA AL EJERCICIO
// var numeros = new Array(6);

//PROCEDIMIENTO 1 pide 6 números
var numeros = [];

for (var i = 0; i <= 5; i++) {
    //ALTERNATIVA AL EJERCICIO
    //numeros[i] = parseInt(prompt("Introduce un número", 0));

    numeros.push(parseInt(prompt("Introduce un número", 0)));
}

//Mostrar el cuerpo de la página
mostrarArray(numeros);


//Mostrar el array por la consola
console.log(numeros);

//Ordenar y mostrarlo 
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, 'ordenados');

//Invertir su orden y mostrarlo
numeros.reverse();
mostrarArray(numeros , 'Invertidos');

//Mostrar cuántos elementos tiene el array
document.write("<h1>El array tiene:"+ numeros.length+ " elemtos");

//Buscar un valor

var busqueda = parseInt(prompt("Busca un número", 0));
var posicion =  numeros.findIndex(numero => numero == busqueda );

if(posicion && posicion !=-1){
    document.write("<hr/><h1>ENCONTRADOS</h1>")
    document.write("<h1>Posición de la busqueda:"+ posicion + "</h1><hr/>")
}else{
    document.write("<hr/><h1>No encontrado</h1><hr/>");
}
