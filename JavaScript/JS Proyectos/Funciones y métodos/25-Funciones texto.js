'use strict'


//TRANSFOMRACIÓN DE TEXTOS


var numero = 444;
var texto1 = "Bienvenido a JS";
var texto2 = "NASA";

var dato = numero.toString();
dato = texto1.toUpperCase(); //MAYÚSCULAS
dato = texto1.toLowerCase(); //MINÚSCULAS


console.log(typeof dato);


//CALCULAR LONGITUD

var nombre = "Brandon Arturo";
nombre = ["hola" , "hola"];

console.log(nombre.length);



//CONCATENAR TEXTOS

// var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);