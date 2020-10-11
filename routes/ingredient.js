//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/ingredient');

//CREATE
router.post("/createIngredient", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/ingredients", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/ingredient/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/updateIngredient/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/deleteIngredient/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;