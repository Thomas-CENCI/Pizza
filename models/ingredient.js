var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  Nom : String,
  Bio : {
    type : Boolean,
    default : true
  },
  Prix : Number
});

module.exports = mongoose.model('Ingredients', IngredientSchema);
