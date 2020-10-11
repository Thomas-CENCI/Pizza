function createCommande(req, res) {
    let Commande = require('../models/commande');
    let newCommande = Commande ({
        Pizzas : req.body.Pizzas,
        Client : req.body.Client
    });
  
    newCommande.save()
    .then((savedCommande) => {

        //send back the created Commande
        res.json(savedCommande);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCommandes(req, res) {

    let Commande = require("../models/commande");

    Commande.find({})
    //.populate('Pizzas')               //DOESN'T WORK...........................................................................................................................
    .populate('Client')
    .then((commandes) => {
        res.status(200).json(commandes);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readCommande(req, res) {

    let Commande = require("../models/commande");

    Commande.findById({_id : req.params.id})
    //.populate('Pizzas')               //DOESN'T WORK..........................................................................................................................
    .populate('Client')
    .then((commande) => {
        res.status(200).json(commande);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function deleteCommande(req, res) {

    let Commande = require("../models/commande");

    Commande.findOneAndRemove({_id : req.params.id})
    .then((deletedCommande) => {
        res.status(200).json(deletedCommande);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createCommande;
module.exports.reads = readCommandes;
module.exports.read = readCommande;
module.exports.delete = deleteCommande;