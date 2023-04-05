"use strict";

//DOM - Document Object Model

function cambiaColor(color) {
  caja.style.background = color;
}
function letraColor(color) {
  caja.style.color = color;
}
function cambiaTexto(texto) {
  caja.innerHTML = texto;
}

// var caja = document.getElementById("micaja") //Captura el div completo
// var caja = document.getElementById("micaja").innerHTML; //Captura el texto de un div
// var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja"); // Para seleccionar ID - #
//var caja = document.querySelector(".micaja"); Para seleccionar class - .

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"; //Cambia el texto por uno que eliga
caja.style.background = "red"; //Cambia estilos
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";
console.log(caja);

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName("div");
// var  contenido = todosLosDivs[1].textContent; //Muestra contenido del array
var contenido = todosLosDivs[2];
contenido.innerHTML = "Otro texto por HTML";

//Se hace un recorrido del array donde parrafo es un elemento HTML y texto un valor
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.append(hr);

var valor;
for (valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
  }
}
console.log(todosLosDivs);

// console.log(todosLosDivs);
// console.log(contenido);

//CONSEGUIR ELEMENTOS POR SU CLASE CSS
var divRojo = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");
// divRojo[0].style.background = "red"//Primera forma de modificar su CSS

//Segunda forma de modificar su CSS
for (var div in divRojo) {
  if (divRojo[div].className == "rojo") {
    divRojo[div].style.background = "red";
  }
}

//Query Selector solo para un elemento 
//QuerySelectorAll es para todos los elementos
var id = document.querySelector("#encabezado");
console.log(id);
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);
