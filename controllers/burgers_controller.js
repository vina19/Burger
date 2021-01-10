const express = require('express');

const router = express.Router();

// Export the database functions.
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
// GET burgers database.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
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

// PUT to update the burger data.
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // return 404 when the ID is not exist and no rows changed.
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;