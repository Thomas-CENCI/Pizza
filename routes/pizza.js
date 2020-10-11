//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/pizza');

//CREATE
router.post("/createPizza", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/Pizzas", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/Pizza/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/updatePizza/:id", (req, res) => {
    
    controller.updatePizza(req, res);

});

//ADD
router.put("/addIngredients/:id", (req, res) => {
    
    controller.add(req, res);

});

//REMOVE
router.put("/removeIngredients/:id", (req, res) => {
    
    controller.remove(req, res);

});

//DELETE
router.delete("/deletePizza/:id", (req, res) => {
    
    controller.delete(req, res);

});


module.exports = router;