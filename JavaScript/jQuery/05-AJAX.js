$(document).ready(function () {
  //!LOAD
  //$("#datos").load("https://reqres.in/")

  //! GET y POST
  $.get("https://reqres.in/api/users", { page: 3 }, function (response) {
    response.data.forEach((element, index) => {
      $("#datos").append(
        "<p>" + element.first_name + "" + element.last_name + "<p>"
      );
    });
  });
  var usuario = {
    name: "Brandon",
    web: "https://www.shapedivider.app/",
  };
  $.post("https://reqres.in/api/users",usuario,function(response){
    console.log(response);
  });
});
