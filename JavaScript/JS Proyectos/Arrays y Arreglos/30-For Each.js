'use strict'



var lenguajes = new Array("Php", "C#", "JS", "VB", "Angular"); //Array en forma de objeto



document.write("<h1>Lenguajes de programación del 2023</h1>");
document.write("<ul>");


lenguajes.forEach((elemento, index, array) => {   //For each nos itera un array y limpia 
    console.log(array);
    document.write("<li>" + index + "-" + elemento + "</li>");
});

document.write("<ul>");



//SEGUNDA FORMA DE ITERAR USANDO FOR in
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}


//BUSQUEDAS DE ARRAY
var busqueda = lenguajes.find(function(lenguaje){
return lenguaje == "Php"
});

 console.log(busqueda)

 //MISMO PROCEDIMIENTO PERO CON FUNCIÓN DE FECHA
 var busqueda = lenguajes.find(lenguaje => lenguaje =="Php");

 //BUSQUEDA CON INDEX
 var busqueda = lenguajes.findIndex(lenguaje => lenguaje =="Php");

