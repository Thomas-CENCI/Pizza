var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let Ingredients = require("./ingredient");

var PizzaSchema = new Schema({
  Nom : String,
  Pate : String,
  Base : String,
  Calzone : {
    type : Boolean,
    default : false
  },
  Ingredients : [{
    type : Schema.ObjectId,
    ref : "Ingredients",
    default : null }],
  Prix : Number
});

module.exports = mongoose.model('Pizza', PizzaSchema);