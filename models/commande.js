var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let Pizzas = require("./pizza");
let Client = require("./client");

var CommandeSchema = new Schema({
  Date : {
    type : Date,
    default : Date.now
  },
  Pizzas : [{
    type : Schema.ObjectId,
    ref : "Pizzas",
    default : null }],
  Client : {
    type : Schema.ObjectId,
    ref : "Client",
    default : null },
});

module.exports = mongoose.model('Commande', CommandeSchema);