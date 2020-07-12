'use strict';

const mongoose = require('mongoose');

const Contato = mongoose.model("Contato");

exports.post = (req, res, next) => {

    const idUsuario = req.body.id_usuario;
    const contato = new Contato();

    contato.id_usuario = mongoose.Types.ObjectId(idUsuario);
    contato.nome = req.body.nome;
    contato.email = req.body.email;
    contato.tipo = req.body.tipo;
    contato.telefone = req.body.telefone;

    contato
        .save()
        .then(success => {
            res.status(201).json({ message: 'Contato cadastrado com sucesso', id_contato: success._id });
        })
        .catch(error => {
            res.status(400).json({ message: 'Falha ao cadastrar contato', error: true });
        });

};

exports.put = (req, res, next) => {
    Contato
        .findByIdAndUpdate(req.body.id_contato, {
            $set: {
                nome: req.body.nome,
                email: req.body.email
            }
        }).then(success => {
            res.status(201).json({
                message: "Contato atualizado com sucesso!",
                error: false
            });
        }).catch(e => {
            res.status(400).json({
                message: "Falha ao atualizar contato",
                error: true
            });
        });
};

exports.get = (req, res, next) => {
    Contato
        .find({
            id_usuario: req.params.id_usuario
        }, '_id id_usuario nome email')
        .then(success => {
            res.status(201).json({
                contatos: success,
                error: false
            });
        }).catch(e => {
            res.status(400).json({
                message: "Falha ao buscar contato",
                error: true
            });
        });
};

exports.delete = (req, res, next) => {

};