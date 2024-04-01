"use strict";
var Project = require("../models/project");

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Home",
    });
  },

  test: function (req, res) {
    return res.status(200).send({
      message: "Test",
    });
  },

  saveProject: function (req, res) {
    var project = new Project();

    var params = req.body;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    project
      .save()
      .then((projectStored) => {
        if (!projectStored) {
          return res
            .status(404)
            .send({ message: "No se ha podido guardar el proyecto" });
        }

        return res
          .status(200)
          .send({
            project: projectStored,
            message: "Project saved successfully",
          });
      })
      .catch((err) => {
        return res
          .status(500)
          .send({ message: "Error al guardar el documento", error: err });
      });
  },

  getProject: function (req, res) {
    var projectId = req.params.id;

    if (projectId == null)
      return res.status(404).send({ message: "El proyecto no existe" });

    Project.findById(projectId)
      .exec()
      .then((project) => {
        if (!project)
          return res.status(404).send({ message: "El proyecto no existe" });

        return res.status(200).send({ project });
      })
      .catch((err) => {
        return res
          .status(500)
          .send({ message: "Error al devolver los datos", error: err });
      });
  },

  getProjects: function (req, res) {
    Project.find({})
      .sort("-year")
      .exec()
      .then((projects) => {
        if (!projects || projects.length === 0) {
          return res
            .status(404)
            .send({ message: "No hay proyectos para mostrar" });
        }
        return res.status(200).send(projects);
      })
      .catch((err) => {
        return res
          .status(500)
          .send({ message: "Error al devolver los datos", error: err });
      });
  },

  updateProject: async function (req, res) {
    try {
        var projectId = req.params.id.trim(); //Trim para pasar directamente el objeto sin valores adicionales
        var update = req.body;

        
        const projectUpdate = await Project.findByIdAndUpdate(projectId, update);

        if (!projectUpdate) {
            return res.status(404).send({ message: 'No se ha podido actualizar el proyecto' });
        }

        return res.status(200).send({ project: projectUpdate });
    } catch (err) {
        return res.status(500).send({ message: 'Error al actualizar el proyecto', error: err });
    }
},


};

module.exports = controller;
