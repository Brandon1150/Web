'use strict'

//ARRAY,ARREGLOS,MATRICES

var nombre = "Brandon";
var nombres = ["Brandon", "Bad Bunny", "Arturo", "Gamma", 52, true];//Array simple

var lenguajes = new Array("Php", "C#", "JS", "VB","Angular"); //Array en forma de objeto


//Los arrays tienen índices

console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);//Para acceder a un elemento específico del array

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres", 0));

if (elemento >= nombres.length) {
    alert("Introduce el número correcto " + nombres.length);
} else {
    alert("El usuario seleccionado es " + nombres[elemento]);
}

alert(nombres[elemento]);
*/

document.write("<h1>Lenguajes de programación del 2023</h1>");
document.write("<ul>");

for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");

}
document.write("<ul>");


