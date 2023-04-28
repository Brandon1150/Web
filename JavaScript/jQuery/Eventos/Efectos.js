$(document).ready(function () {

    var caja = $('#caja');
    $('#mostrar').hide();


    $('#mostrar').click(function () {
        $(this).hide();
        $('#ocultar').show();
        $('#caja').fadeTo('slow', 1);
    });

    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();
        $('#caja').fadeTo('slow',function(){
            console.log("Cartel ocultado");
        });
    });




    //Forma directa de meter un evento a un botón
    $('#todoenuno').click(function () {
        $('#caja').slideToggle('fast');
    });



    $('#animame').click(function () {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '60px'
        }, "slow")
            .animate({
                borderRadius: '900px',
                marginTop: '80px',
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px',
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px',
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '60px'
            });


    });


});