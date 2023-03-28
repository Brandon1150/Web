'use strict'

var numero = 444;
var texto1 = "            Bienvenido a JS para una busqueda JS por Brandon Arturo             ";
var texto2 = "NASA";

var busqueda = texto1.replace("JS","Angular"); //El primero parámetro es el texto a reemplazar por el segundo
console.log(busqueda);


var busqueda = texto1.slice(15); //Corta un string desde donde indique
console.log(busqueda);

var busqueda = texto1.split(" "); //Me da espacios en un array
console.log(busqueda);

var busqueda = texto1.trim(); //Quita los espacios
console.log(busqueda);



