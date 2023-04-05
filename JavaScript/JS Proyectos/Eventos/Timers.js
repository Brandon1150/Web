"use strict";

window.addEventListener("load", function () {
  function intervalo() {
    var tiempo = setInterval(() => {
      console.log("Set interval ejecutado");
      var encabezado = document.querySelector("h1");
      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "30px";
      } else {
        encabezado.style.fontSize = "50px";
      }
    }, 500);
    return tiempo;
  }

  var tiempo = intervalo();
  var stop = document.querySelector("#stop");

  stop.addEventListener("click", function () {
    alert("Has detenido el ciclo");
    clearInterval(tiempo);
  });

  var start = document.querySelector("#start");

  start.addEventListener("click", function () {
    alert("Has iniciado el ciclo");
    intervalo();
  });
});
