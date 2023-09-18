'use strict';

var mongoose = require('mongoose'); //variable donde hace la petición
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise; //llama al método promesa 
mongoose.connect('mongodb://localhost:27017/Portafolio') //Agregar dirección IP como método de conexión y nombre de base de datos tal y como está registrada
.then(()=>{
    console.log("Conexión exitosa a la base de datos master");


    //creación del servidor
    app.listen(port,()=>{
        console.log("Servidor corriendo correctamente en el puerto 3700"); 
    });
})
.catch(err => console.log(err));