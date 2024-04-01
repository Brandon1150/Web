'use strict'



var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Le paso el esquema de campos de la DB en Mongo
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});


module.exports = mongoose.model('Project', ProjectSchema);
//Guarda los documentos en la colección