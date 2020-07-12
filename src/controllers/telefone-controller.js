'use strict';

const mongoose = require('mongoose');
const Telefone = mongoose.model("Telefone");

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://tomaz:ZAMcry189@ds052827.mlab.com:52827/mogoproducts';

exports.post = (req, res, next) => {
    const tel = new Telefone();
    const idContato = req.body.id_contato;
    tel.id_contato = mongoose.Types.ObjectId(idContato);
    tel.tipo = req.body.tipo;
    tel.numero = req.body.numero;

    tel.save()
        .then(success => {
            res.status(201).json({ message: 'Telefone cadastrado com sucesso', error: false });
        })
        .catch(error => {
            res.status(400).json({ message: 'Falha ao cadastrar telefone', error: error });
        });

};

exports.get = (req, res, next) => {

    Telefone
        .find({ id_contato: req.params.id_contato })
        .then(success => {
            res.status(201).json({telefones: success, error: false});
        }, '_id id_contato tipo numero')
        .catch(e => {
            res.status(400).json({
                message: "Falha ao buscar telefone",
                error: true
            });
        });

};

exports.put = (req, res, next) => {

    Telefone
        .findByIdAndUpdate(req.body.id_telefone, {
            $set: {
                tipo: req.body.tipo,
                numero: req.body.numero
            }
        }).then(success => {
            res.status(201).json({
                message: "Telefone atualizado com sucesso!",
                error: false
            });
        }).catch(e => {
            res.status(400).json({
                message: "Falha ao atualizar telefone",
                error: true
            });
        });

};