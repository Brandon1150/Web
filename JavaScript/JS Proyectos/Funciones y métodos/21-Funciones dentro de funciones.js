'use strict'


//Revisión del apartado 20 donde muestra dos instrucciones para dos diferentes funciones,aquí se óptimiza el mismo procedimiento teniendo dos diferentes funciones con una serie de instruccioes y le doy la lógica en una sola 


//Defino la función 1


function ImpresionPorConsola(numero1, numero2) {
    console.log("Suma:" + (numero1 + numero2));
    console.log("Resta:" + (numero1 - numero2));
    console.log("Multiplicación:" + (numero1 * numero2));
    console.log("División:" + (numero1 / numero2));
    console.log("***********************************");
}

//Defino la función 2

function ImpresionPorPantalla(numero1, numero2) {
    document.write("Suma:" + (numero1 + numero2 + "<br/>"));
    document.write("Resta:" + (numero1 - numero2 + "<br/>"));
    document.write("Multiplicación:" + (numero1 * numero2 + "<br/>"));
    document.write("División:" + (numero1 / numero2 + "<br/>"));
    document.write("***********************************");

}


function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
        ImpresionPorConsola(numero1, numero2);
    } else {
        ImpresionPorPantalla(numero1, numero2);
    }

    return true;
}

calculadora(1,4);
calculadora(7,2);
calculadora(2,5,true);
calculadora(1,3,true);

