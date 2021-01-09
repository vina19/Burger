const express = require('express');

const router = express.Router();

// Export the database functions.
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
// GET burgers database.
router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

// POST burger data to the database.
router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {

      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

module.exports = router;