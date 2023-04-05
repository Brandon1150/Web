'use strict'

//EVENTOS DEL RATÓN


function cambiarColor(){
    boton.style.background = "red";
console.log("Me has dado click");
    var bg = boton.style.background;
    if(bg == "green"){
      
        boton.style.background = "red";
       


    }else{
        boton.style.background = "green";

    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
}


//Segunda forma de utilizar el evento 
var boton = document.querySelector('#boton');



//Evento click
boton.addEventListener('click',function(){
    cambiarColor();
});


//Mouse over

boton.addEventListener('mouseover',function(){
    boton.style.background = 'yellow'
});

//Mouseout
boton.addEventListener('mouseout',function(){
    boton.style.background = '#ccc'
});

//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("[focus]Estas dentro del input");

});

//Blur

input.addEventListener('blur',function(){
    console.log("[blur]Estas fuera del input");
});

//Keydown

input.addEventListener('keydown',function(event){
    console.log("Pulsando esta tecla" , String.fromCharCode(event.keyCode));
});


//Keypress

//Keyup