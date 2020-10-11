function createIngredient(req, res) {
    let Ingredient = require('../models/ingredient');
    let newIngredient = Ingredient ({
        Nom: req.body.Nom,
        Bio : req.body.Bio,
        Prix : req.body.Prix
    });
  
    newIngredient.save()
    .then((savedIngredient) => {

        //send back the created Ingredient
        res.json(savedIngredient);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readIngredients(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.find({})
    .then((ingredients) => {
        res.status(200).json(ingredients);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readIngredient(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.findById({_id : req.params.id})
    .then((ingredient) => {
        res.status(200).json(ingredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateIngredient(req, res) {

    let Ingredient = require("../models/ingredient");

    let newFields = {};

    if(req.body.Bio) newFields.Bio = req.body.Bio;
    if(req.body.Prix) newFields.Prix = req.body.Prix;    

    Ingredient.findByIdAndUpdate(
        {_id: req.params.id}, 
        newFields,
        {new : true})
    .then((updatedIngredient) => {
        res.status(200).json(updatedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteIngredient(req, res) {

    let Ingredient = require("../models/ingredient");

    Ingredient.findOneAndRemove({_id : req.params.id})
    .then((deletedIngredient) => {
        res.status(200).json(deletedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createIngredient;
module.exports.reads = readIngredients;
module.exports.read = readIngredient;
module.exports.delete = deleteIngredient;
module.exports.update = updateIngredient;