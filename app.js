'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

require('./src/models/usuario'); // Carregando o model usuario
require('./src/models/contato'); // Carregando o model contato
require('./src/models/telefone'); // Carregando o model contato

const app = express();

const mongoose = require('./src/config/dbConnection')();

const contatoRoute = require('./src/routes/contato-route');
const usuarioRoute = require('./src/routes/usuario-route');
const telefoneRoute = require('./src/routes/telefone-route');

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/usuario', usuarioRoute);
app.use('/contato', contatoRoute);
app.use('/telefone', telefoneRoute);


module.exports = app;