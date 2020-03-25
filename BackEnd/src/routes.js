const express = require('express');

const ongControler = require('./controlers/ongControler');
const incidentControlers = require('./controlers/incidentControler');
const profilerControlers = require('./controlers/profilerControler');
const sessionControlers = require('./controlers/sessionControler');

const routes = express.Router();

routes.post('/sessions',sessionControlers.create);

routes.get('/ongs', ongControler.index);
routes.post('/ongs',ongControler.create);

routes.get('/incidents',incidentControlers.index);
routes.post('/incidents',incidentControlers.create);
routes.delete('/incidents/:id',incidentControlers.delete);

routes.get('/profile',profilerControlers.index);

module.exports = routes;