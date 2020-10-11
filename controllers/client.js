function createClient(req, res) {
    let Client = require('../models/client');
    let newClient = Client ({
        Nom: req.body.Nom,
        Prenom : req.body.Prenom,
        Age : req.body.Age,
        Adresse : req.body.Adresse,
        Mail : req.body.Mail,
        Telephone : req.body.Telephone
    });
  
    newClient.save()
    .then((savedClient) => {

        //send back the created Client
        res.json(savedClient);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readClients(req, res) {

    let Client = require("../models/client");

    Client.find({})
    .then((clients) => {
        res.status(200).json(clients);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readClient(req, res) {

    let Client = require("../models/client");

    Client.findById({_id : req.params.id})
    .then((client) => {
        res.status(200).json(client);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateClient(req, res) {

    let Client = require("../models/client");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {Bio : req.body.Bio}, 
        {new : true})
    .then((updatedClient) => {
        res.status(200).json(updatedClient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteClient(req, res) {

    let Client = require("../models/client");

    Client.findOneAndRemove({_id : req.params.id})
    .then((deletedCliente) => {
        res.status(200).json(deletedClient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createClient;
module.exports.reads = readClients;
module.exports.read = readClient;
module.exports.delete = deleteClient;
module.exports.update = updateClient;