const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id_contato: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: [true, 'tipo é obrigatório'],
        trim: true
    },
    numero: {
        type: String,
        required: [true, 'número é obrigatório'],
        trim: true
    }
});

module.exports = mongoose.model('Telefone', schema);