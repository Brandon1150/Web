"use strict"

//Eventos de ratón
var boton = document.querySelector("#boton");

function cambiarColor(){
    console.log("Diste Click");
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }

    return true;
}
