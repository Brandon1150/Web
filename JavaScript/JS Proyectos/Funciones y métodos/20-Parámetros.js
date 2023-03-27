'use strict'


//PARÁMETROS
//Variables dinámicos para no mantener fijo los valores y solamente definirlos al momento de llamar la función


//Defino la función
function calculadora(numero1, numero2) {

    //Conjunto de instrucciones
    console.log("Suma:" + (numero1 + numero2));
    console.log("Resta:" + (numero1 - numero2));
    console.log("Multiplicación:" + (numero1 * numero2));
    console.log("División:" + (numero1 / numero2));
    console.log("***********************************");

    return "Hola soy una calculado con función";


}

//Invocar o llamar a la función

for (var i = 1; i <= 10; i++) {
    console.log(i); //Esto muestra en qué número de interación va
    calculadora(i, 8);
}

