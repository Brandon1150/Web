'use strict'


function getBom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=500,height=300");
}

getBom();

