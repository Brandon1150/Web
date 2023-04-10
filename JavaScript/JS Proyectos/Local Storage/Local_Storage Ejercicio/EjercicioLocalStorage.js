'use strict'

//FORMULARIO DE AGREGADO
var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function () {

    var titulo = document.querySelector("#addpelicula").value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);

    }
});


  //VALIDADOR PARA QUE NO ACEPTE VACIOS
var ul = document.querySelector("#peliculas-list");
for (var indice in localStorage) {
    console.log(localStorage[indice]);
    if (typeof localStorage[indice] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[indice]);
        ul.append(li);
    }

}

//FORMULARIO DE BORRADO
var formulariob = document.querySelector("#formpBorrarpeliculas");
formulariob.addEventListener('submit', function () {

    var titulo = document.querySelector("#borrarPelicula").value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo, titulo);

    }
});
