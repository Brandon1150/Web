'use strict'

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Titanic", "Avengers", "Starwars"];


var cine = [categorias, peliculas];

var elemento = "";

do {
    elemento = prompt("Introuce tu película");
    peliculas.push(elemento);
} while (elemento != "FIN") {
}


peliculas.pop(); //Sirve para eliminar el último elemento de un array


//Busca un elemento especifico y lo borra
var indice = peliculas.indexOf("Starwars");
console.log(indice);

if (indice > -1){
    peliculas.splice(indice,1);
}


var peliculas_string = peliculas.join(); //Con el método Join el array se converte en strings
console.log(peliculas_string);
console.log(peliculas);


//CONVERTIR STRING EN UN ARRAY

var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(","); //El método split convierte el texto en un array
console.log(cadena_array);
console.log(cadena);



//ORDENAR UN ARRAY
peliculas.sort();//ORDENAR ALFBÉTICAMENTE
peliculas.reverse();//ORDENAR DE FORMA INVERSA
console.log(peliculas);

