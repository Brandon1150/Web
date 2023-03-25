'use strict'

//Pruebas con Let y Var
//Su diferencia es el alcance

//PRUEBA CON VAR
var numero = 40; //valor 40
console.log(numero);

if(true){
    var numero =50;
    console.log(numero); //valor 50
}

console.log(numero);

//PRUEBA CON LET

var texto = "JS Proyectos";
console.log(texto); //valor JS Proyectos

if(true){
    let texto = "Curso de JS";
    console.log(texto) // valor Curso de JS
}

console.log(texto);// Valor JS Proyectos