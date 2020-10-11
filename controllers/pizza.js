function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        Nom: req.body.Nom,
        Pate : req.body.Pate,
        Base : req.body.Base,
        Calzone : req.body.Calzone,
        Ingredients : req.body.Ingredients,
        Prix : req.body.Prix
    });
  
    newPizza.save()
    .then((savedPizza) => {

        //send back the created Pizza
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readPizzas(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.find({})
    .populate('Ingredients')
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readPizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findById({_id : req.params.id})
    .populate('Ingredients')
    .then((pizza) => {
        res.status(200).json(pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updatePizza(req, res) {

    let Pizza = require("../models/pizza");

    let newFields = {};

    if(req.body.Calzone) newFields.Calzone = req.body.Calzone;
    if(req.body.Prix) newFields.Prix = req.body.Prix;    

    Pizza.findByIdAndUpdate(
        {_id: req.params.id}, 
        newFields,
        {new : false})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function addIngredients(req, res) {

    let Pizza = require("../models/pizza");

    let newIngredients = req.body.Ingredients;

    if (!Array.isArray(newIngredients)) newIngredients = [newIngredients];

    Pizza.find({_id : req.params.id})
    .then((foundPizza) => {
        newIngredients.forEach(i => {
            foundPizza[0].Ingredients.push(i);
        });

            Pizza.findByIdAndUpdate(
                {_id: req.params.id}, 
                {"Ingredients" : foundPizza[0].Ingredients},
                {new : true}
            )
            .then((updatedPizza) => {
                res.status(200).json(updatedPizza);
            }, (err) => {
                res.status(500).json(err);
            });
    });
}

function removeIngredients(req, res) {

    let Pizza = require("../models/pizza");

    let ingredientsToRemove = req.body.Ingredients;

    if (!Array.isArray(ingredientsToRemove)) ingredientsToRemove = [ingredientsToRemove];

    Pizza.find({_id : req.params.id})
    .then((foundPizza) => {
        let newIngredients = foundPizza[0].Ingredients;
        ingredientsToRemove.forEach(i => {
            let index = newIngredients.indexOf(i);
            if(index > -1){ newIngredients.splice(index, 1); }
        });

            Pizza.findByIdAndUpdate(
                {_id: req.params.id}, 
                {"Ingredients" : newIngredients},
                {new : true}
            )
            .then((updatedPizza) => {
                res.status(200).json(updatedPizza);
            }, (err) => {
                res.status(500).json(err);
            });
    });
}

function deletePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza;
module.exports.updatePizza = updatePizza;
module.exports.add = addIngredients;
module.exports.remove = removeIngredients;