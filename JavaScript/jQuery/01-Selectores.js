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

   // Selectores de etiqueta
   var parrafos = $('p').css("cursor","pointer");
   parrafos.click(function(){
    var that = $(this);
      if(!that.hasClass('grande')){
      that.addClass('grande');

   }else{
      that.removeClass('grande');
   }
   });


   // Selectore de atributo
$('[title="Google"]').css('background','#ccc');
$('[title="IlovePDF"]').css('background','blue').css('color','white');

// Otros
// $('p,a').addClass('margen-superior'); Seleccion de todas las clases

// var busqueda = $('#caja').find('.resaltado');
var busqueda = $('#caja.resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
console.log(busqueda);

 //console.log(mi_clase.eq(1)); //Sleccion de array

})