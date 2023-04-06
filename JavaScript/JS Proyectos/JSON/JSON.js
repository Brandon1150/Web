'use strict'


//JSON - Javascript Object Notation

var pelicula = {
    titulo: "Jhon Wick",
    year: 2023,
    pais: 'USA'
};


var peliculas = [
    { titulo: "Mario", year: 2023, pais: "USA" },
    pelicula
]

// document.write(pelicula.titulo);

// pelicula.titulo="Morbius";


var cajapeliculas = document.querySelector("#peliculas");
var index
for(index in peliculas){
var p = document.createElement("p");
p.append(peliculas[index].titulo+"-"+peliculas[index].year);
cajapeliculas.append(p);
}

// console.log(peliculas);