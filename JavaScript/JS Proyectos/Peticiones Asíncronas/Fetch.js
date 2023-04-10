'use strict'

//Fetch(ajax) y peticiones a servicios/API REST

var div_usuarios = document.querySelector("#usuarios");
var div_email = document.querySelector("#email");
var usuarios = [];

fetch('https://reqres.in/api/users') //Capturar los datos(URL)
.then(data => data.json()) //Convertir ese objeto a JSON
.then(users =>{                   
    usuarios = users.data;         //Guardar la data 
    console.log(usuarios);

    usuarios.map((users,i)=>{
let nombre = document.createElement('h2');
var email = document.createElement('h2');

nombre.innerHTML = i + '.' +users.first_name + " " + users.last_name + "-"+ users.email;
email.innerHTML = users.email;
div_usuarios.appendChild(nombre);
div_email.appendChild(email);

document.querySelector(".loading").style.display = "none";

    });
});


