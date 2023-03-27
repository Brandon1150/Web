'use strict'



//FUNCIONES ANÓNIMAS
//Es una función que no tiene nombre

var pelicula = function (nombre) {
    return "La película es " + nombre;
}


//CALLBACK
//Es una función que se ejecuta dentro de otra función

// function sumame(numero1, numero2) {
//     var sumar = numero1 + numero2;
//     return sumar;
// }


// console.log(sumame(3, 2));





function sumame(numero1, numero2, sumaYMuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
sumame(5, 7, function (dato) {
    console.log("La suma es:", dato);
},
    function (dato) {
        console.log("La suma por dos es:", (dato * 2));
    });


