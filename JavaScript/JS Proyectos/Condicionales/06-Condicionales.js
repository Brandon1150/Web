'use strict'

//CONDICIONAL IF
//Si A es igual a B entonces haz algo


var edad1 = 30;
var edad2 = 12;

//Si pasa estos
if (edad1 > edad2) {
    //Ejecuta esto
    console.log("Edad uno es mayor que edad dos");


} else {
    console.log("La edad uno es inferior");
}

/*
OPERADORES RELACIONALES
Mayor: >
Menor: <
Mayor o igual que: >=
Menor o igual que: <=
Igual: ==
Distinto: !=
*/

var edad = 43;
var nombre = "Arturo"



if (edad > 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años es mayor de edad");

    if (edad < 30) {
        console.log("Eres millenial");
    } else if (edad >= 70) {
        console.log("Eres un dinosaurio AAARRRRRRHG");
    } else {
        console.log("Eres chavoruco")
    }

} else {
    console.log(nombre + " tiene " + edad + " años es menor de edad");

}

/*
OPERADORES LÓGICOS
AND(y): &&
OR(o): ||
NOT(negación):!
*/

var year = 2023;

//Negación

if (year != 2016) {
    console.log("El año no es 2016 realmentes es:" + year);
}

//AND

if(year >= 2000 && year <=2020 && year != 2023){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era futurista")
}


//OR
if(year == 2008 || (year >= 2023 && year == 2028)){
console.log("El año acaba en 8:");
}else{
    console.log("Año no registrado");
}