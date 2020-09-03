// Required Modules
const fs = require("fs");
const notesData = require("../data/sample.json");

module.exports = function(app){

    //========== API ROUTES ==========

    // GET Method to return all notes
    app.get("/api/payment", function(req, res){
        res.json(notesData);
    });
    app.get("/api/payment:id", (req, res) => {
        const itemId = req.params.id;
        const item = data.indexof(_item => _item.id === itemId);
     
        if (item) {
           res.json(item);
        } else {
           res.json({ message: `item ${itemId} doesn't exist`})
        }
     });
};