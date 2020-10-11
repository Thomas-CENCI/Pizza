//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/commande');

//CREATE
router.post("/createCommande", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/Commandes", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/Commande/:id", (req, res) => {
    
    controller.read(req, res);

});


//DELETE
router.delete("/deleteCommande/:id", (req, res) => {
    
    controller.delete(req, res);

});


module.exports = router;