'use strict'


//El método Index es para hacer busquedas

var numero = 444;
var texto1 = "Bienvenido a JS para una busqueda JS";
var texto2 = "NASA";

var busqueda = texto1.indexOf("JS"); //Busca al inicio del texto
console.log(busqueda);

var busqueda = texto1.lastIndexOf("JS"); //Busca el fínal del texto
console.log(busqueda);

var busqueda = texto1.search("JS"); //Tambien es de busqueda
console.log(busqueda);

var busqueda = texto1.match("JS"); //Devuelve un array 
console.log(busqueda);

var busqueda = texto1.match(/JS/g); //Para buscarlos a nivel global todas las coincidencias
console.log(busqueda);

var busqueda = texto1.substr(10,12); //Para definir un alcance despues del primer caracter
console.log(busqueda);

var busqueda = texto1.charAt(14); //Para indicarle el caracter exacto
console.log(busqueda);

var busqueda = texto1.startsWith("Bienvenido"); //Da true si encuentra el texto especifico cuando empieza con ese string
console.log(busqueda);

var busqueda = texto1.endsWith("JS"); //Da true si encuentra el texto especifico cuando termina con ese string
console.log(busqueda);

var busqueda = texto1.includes("busqueda"); //Da true si encuentra ese string especifico en cualquier parte del texto
console.log(busqueda);