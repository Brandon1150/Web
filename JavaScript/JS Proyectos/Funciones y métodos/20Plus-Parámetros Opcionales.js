'use strict'


//PARÁMETROS
//Variables dinámicos para no mantener fijo los valores y solamente definirlos al momento de llamar la función


//Defino la función
function calculadora(numero1, numero2, mostrar = false) {

    //Conjunto de instrucciones
    if (mostrar == false) {   //En caso de ser false solo muestralo en consola
        console.log("Suma:" + (numero1 + numero2));
        console.log("Resta:" + (numero1 - numero2));
        console.log("Multiplicación:" + (numero1 * numero2));
        console.log("División:" + (numero1 / numero2));
        console.log("***********************************");


    } else {   //En caso de ser true imprimelo en pantalla

        document.write("Suma:" + (numero1 + numero2 + "<br/>"));
        document.write("Resta:" + (numero1 - numero2+"<br/>"));
        document.write("Multiplicación:" + (numero1 * numero2+"<br/>"));
        document.write("División:" + (numero1 / numero2+"<br/>"));
        document.write("***********************************");
    }
}

//Invocar o llamar a la función

calculadora(1,4);
calculadora(7,2);
calculadora(2,5,true);
calculadora(1,3,true);




