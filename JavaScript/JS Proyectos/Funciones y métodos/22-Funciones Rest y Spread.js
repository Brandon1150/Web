'use strict'


//PARAMETROS REST Y SPREAD



//El parámetro tipo REST es cuando no conozco la cantidad de parámetros a pasar lo defino con ...(nombre)y me dá el array 
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1:" + fruta1);
    console.log("Fruta 2:" + fruta2);
    console.log(resto_de_frutas);

}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");



//El parámetro SPREAD es para dar parámetro de acuerdo a un array


var frutas = ["Naranja","Manzana"]
listadoFrutas(...frutas, "Sandía", "Pera", "Melón", "Coco");