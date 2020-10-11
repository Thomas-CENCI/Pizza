//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/client');

//CREATE
router.post("/createClient", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/Clients", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/Client/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/updateClient/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/deleteClient/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;