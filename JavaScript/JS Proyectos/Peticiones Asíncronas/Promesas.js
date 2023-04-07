'use strict'

//Promesas

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");



getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJanet();
    })
    .then(data => data.json())
    .then(users => {
        mostrarJanet(users.data);
        return getinfo();

    })
    .then(data => {
        div_profesor.innerHTML = data;  //Asi s emuestran las promesas creadas
    })
    .catch(error =>{
        alert("Error en las peticiones");
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users'); //Capturar los datos(URL)

}

function getJanet() {
    return fetch('https://reqres.in/api/users/2'); //Capturar los datos(URL)

}


//CREACION DE PROMESAS
function getinfo() {
    var profesor = {
        nombre: 'Brandon',
        apellidos: 'Angeles',
        url: 'https://www.youtube.com/?gl=ES&hl=es'
    };


    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);
        if (typeof profesor_string != 'string') return reject('error');
        return resolve(profesor_string);
    })


}

function listadoUsuarios(usuarios) {

    usuarios.map((users, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + '.' + users.first_name + " " + users.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';

    });

}

function mostrarJanet(users) {


    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = users.first_name + " " + users.last_name;
    avatar.src = users.avatar;
    avatar.width = "100";

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = 'none';



}
