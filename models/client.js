var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  Nom : String,
  Prenom : String,
  Age : Number,
  Adresse : String,
  Mail : String,
  Telephone : String
});

module.exports = mongoose.model('Client', ClientSchema);

