'use strict'


var express = require('express');
var ProjectController = require ('../controller/project');

var router = express.Router();


router.get('/home',ProjectController.home);
router.get('/test',ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);




module.exports = router;

