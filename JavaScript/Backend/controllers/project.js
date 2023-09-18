//Un controlador es una clase que tiene metodos o acciones relacionados con la entidad a trabajar
'use strict';

var Project = require('../models/project');
var controller = {
     
    home: function(req,res){
        return res.status(200).send({
            message: 'Soy el home'
        });

    },

    test:function(req,res){
        return res.status(200).send({
            message: 'Soy el metodo test'
        });
    },

    saveProject:function(req,res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        
        return res.status(200).send({
            project:project,
            message: "Metodo saveProject"
            
        });
    },

};


module.exports = controller;

 