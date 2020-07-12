'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    nome: {
        type: String,
        required: [true, 'nome é obrigatório'],
        trim: true
    },
    email: {
        type: String,
        required: false,
        trim: true
    }
});

module.exports = mongoose.model('Contato', schema);