'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: [true, 'nome é obrigatório'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email é obrigatóio'],
        trim: true
    },
    senha: {
        type: String,
        required: [true, 'senha é obrigatório'],
        trim: true
    }
});

module.exports = mongoose.model('Usuario', schema);