'use strict'



//Las variables dentro de las funciones son locales

function holaMundo(texto) {
    var hola_mundo = "Texto dentro de función";
    console.log(texto);
    console.log(numero);                   /*Convierte a tipo string  ***************** console.log(numero.toString());*/
    console.log(hola_mundo);
}

//Si se definen variables fuera de una función,se vuelven globales

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);

