const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const ongControler = require('./controlers/ongControler');
const incidentControlers = require('./controlers/incidentControler');
const profilerControlers = require('./controlers/profilerControler');
const sessionControlers = require('./controlers/sessionControler');

const routes = express.Router();

routes.post('/sessions',sessionControlers.create);

routes.get('/ongs', ongControler.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys(
        {
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        }
    )})
,ongControler.create);

routes.get('/incidents',
        celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            }) 
        })
,incidentControlers.index);
routes.post('/incidents',incidentControlers.create);
routes.delete('/incidents/:id',
        celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        })
,incidentControlers.delete);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
})

,profilerControlers.index);

module.exports = routes;