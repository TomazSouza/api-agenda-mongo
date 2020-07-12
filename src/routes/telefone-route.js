'use strict';

const express = require('express');
const controllerTelefone = require('../controllers/telefone-controller');

const routerTelefone = express.Router();

routerTelefone.post('/salvar', controllerTelefone.post);
routerTelefone.get('/:id_contato', controllerTelefone.get);
routerTelefone.put(':id_telefone/atualizar', controllerTelefone.put);

module.exports = routerTelefone;