'use strict'


//Local storage


//Comprobar disponibilidad
if (typeof (Storage) !== 'undefined') {
    console.log("Si hay LocalStorage");
} else {
    console.log("No hay LocalStorage");
}


//Guardar datos
localStorage.setItem("titulo", "Curso de JS");


//Recuperar elemento
document.querySelector("#local").innerHTML = (localStorage.getItem("titulo"));


//Guardar objetos
var usuario = {
    nombre: "Brandon",
    edad: 22,
    sexo: "M"
}

localStorage.setItem("usuario", JSON.stringify(usuario));


//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs)
document.querySelector("#local").append(" "+ userjs.edad);