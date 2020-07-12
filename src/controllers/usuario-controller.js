'use strict';
const criptografar = require('../utils/criptografar-senha');
const mongoose = require('mongoose');
const Usuario = mongoose.model("Usuario");

exports.post = (req, res, next) => {
    const usuario = new Usuario();
    const senhaCriptografada = criptografar(req.body.senha);

    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha = senhaCriptografada;

    usuario.save()
        .then(success => {
            res.status(201).json({ message: 'Usuario cadastrado com sucesso', id_usuario: success._id });
        })
        .catch(error => {
            res.status(400).json({ message: 'Falha ao cadastrar usuario', error: true });
        });

};

exports.put = (req, res, next) => {

    Usuario
        .findByIdAndUpdate(req.params.id_usuario, {
            $set: {
                nome: req.body.nome
            }
        }).then(success => {
            res.status(201).json({
                message: "Usuario atualizado com sucesso!",
                error: false
            });
        }).catch(e => {
            res.status(400).json({
                message: "Falha ao atualizar usuario",
                error: true
            })
        });

};

exports.get = (req, res, next) => {

    const senhaCriptografada = criptografar(req.params.senha);

    Usuario
        .find({
            email: req.params.email,
            senha: senhaCriptografada
        }, '_id')
        .then(data => {

            if (data.length === 0) {
                res.status(200).json({ message: "Email ou Senha inválido.", error: true });
            } else {
                res.status(200).json({ id_usuario: data, error: false });
            }
        })
        .catch(error => {
            res.status(400).json(error);
        });

};