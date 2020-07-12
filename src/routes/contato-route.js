'use strict';

const express = require('express');
const controllerContato = require('../controllers/contato-controller');

const routerContato = express.Router();

routerContato.post('/salvar', controllerContato.post);
routerContato.get('/:id_usuario', controllerContato.get);
routerContato.put(':id_contato/atualizar');

module.exports = routerContato;