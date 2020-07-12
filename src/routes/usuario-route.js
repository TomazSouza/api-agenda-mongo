'use strict';

const express = require('express');
const controllerUsuaro = require('../controllers/usuario-controller');

const routerUsuario = express.Router();

routerUsuario.post('/salvar', controllerUsuaro.post);
routerUsuario.get('/login/:email/:senha', controllerUsuaro.get);
routerUsuario.put(':id_usuario/atualizar');

module.exports = routerUsuario;