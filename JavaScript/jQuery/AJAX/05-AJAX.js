$(document).ready(function () {
  //!LOAD
  //$("#datos").load("https://reqres.in/")

  //! GET y POST
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    response.data.forEach((element, index) => {
      $("#datos").append(
        "<p>" + element.first_name + "" + element.last_name + "<p>"
      );
    });
  });

  $("#formulario").submit(function (e) {
    e.preventDefault();
    var usuario = {
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    };
    console.log(usuario)
    // $.post($(this).attr("action"), usuario, function (response) {
    //   console.log(response);
    // }).done(function () {
    //   alert("usuario añadido");
    // });



    //METODO AJAX
    $.ajax({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function(){
        console.log("Enviando usaurio...");
      },
      succes: function(response){
        console.log(response);
      },
      error: function(response){
        console.log("Ha ocurrido un error");
      },
      timeout:2000
    });


    return false;
  });

});
