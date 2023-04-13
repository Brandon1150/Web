$(document).ready(function () {

// ! Evento MouseOver y MouseOut
 var caja =$("#caja");

//  caja.mouseover(function(){
// $(this).css("background","red");

//  });


// caja.mouseout(function(){
// $(this).css("background","green");
// });



function cambiaRojo(){
    $(this).css("background","red");
}

function cambiaVerde(){
    $(this).css("background","green");
}


//*Evento Hover

caja.hover(cambiaRojo,cambiaVerde);                         

});

