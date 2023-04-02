'use strict'

//DOM - Document Object Model


function cambiaColor(color){
    caja.style.background = color;
}
function letraColor(color){
    caja.style.color = color;
}
function cambiaTexto(texto){
    caja.innerHTML = texto;
}

// var caja = document.getElementById("micaja") //Captura el div completo
// var caja = document.getElementById("micaja").innerHTML; //Captura el texto de un div
// var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");// Para seleccionar ID - #
//var caja = document.querySelector(".micaja"); Para seleccionar class - .


caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"; //Cambia el texto por uno que eliga
caja.style.background = "red"; //Cambia estilos
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";
console.log(caja);
