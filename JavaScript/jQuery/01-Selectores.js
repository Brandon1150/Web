$(document).ready(function () {

    // Selector de ID

    var rojo = $("#rojo").css("background", "red")
                         .css("color", "white");

    $("#amarillo").css("background", "yellow")
                  .css("color", "green");
    
                   console.log(rojo);
 
    $("#verde").css("background", "green")
               .css("color", "white");


   // Selector de clase
 var mi_clase = $(".Zebra").css("padding","5px");
//  mi_clase.css("border","5px dashed black"); Anade de forma forzada estilos

 $(".sin_borde").click(function(){
    console.log("Click dado");
    $(this).addClass('Zebra');
 })

 //console.log(mi_clase.eq(1)); //Sleccion de array

})