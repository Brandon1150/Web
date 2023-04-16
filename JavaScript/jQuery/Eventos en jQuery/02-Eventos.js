$(document).ready(function () {

    // ! Evento MouseOver y MouseOut
    var caja = $("#caja");

    //  caja.mouseover(function(){
    // $(this).css("background","red");

    //  });


    // caja.mouseout(function(){
    // $(this).css("background","green");
    // });



    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }


    //*Evento Hover

    caja.hover(cambiaRojo, cambiaVerde);

    // Click, Doble click

    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white")
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "yellow")
    });


    //Focus y blur

    var nombre = $("#nombre");
    var datos = $("#datos")

    nombre.focus(function () {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "2px solid transparent");

        datos.text($(this).val()).show();
    });


    //Mousedown y Mouseup

    datos.mousedown(function () {
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "pink");
    });


    //Mousemove

    $(document).mousemove(function (e) {
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        console.log("En x =" + e.clientX);
        console.log("En Y =" + e.clientY);

        var cursor = $("#sigueme");
        $("body").css("cursor", "none");
        cursor.css("left", e.clientX);
        cursor.css("top", e.clientY);

    });





});

