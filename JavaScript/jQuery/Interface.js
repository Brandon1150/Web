$(document).ready(function () {


    //MOVER ELEMENTO POR LA PÁGINA
     $('.elemento').draggable();


    //REDIMENSIONAR
     $('.elemento').resizable();


    //SELECCONAR ELEMENTOS
    // $('.lista-seleccionable').selectable();



    //ORDENAR ELEMENTOS
     $('.lista-seleccionable').sortable({
         update: function (event, ui) {
             console.log("Ha cambiado la lista");
         }
     });


    //EFECTOS DE SOLTAR Y ARRASTRAR
    $("elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("Has soltado algo");
        }
    });
 
});