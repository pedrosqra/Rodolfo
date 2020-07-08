const express = require('express');

const materias = require('./pages/materias');

const routes = express.Router();

routes.get('/materias', index.index);

module.exports = routes;