"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Portafolio")
  .then(() => {
    console.log("Conexión exitosa a la base de datos");


    //Creación del servicio
    app.listen(port ,()=>{

      console.log(`Servidor corriendo en la url: http://localhost:${port}`);
    });

  })
  .catch(err => console.log(err));
