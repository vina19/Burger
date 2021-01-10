let express = require("express");

let router = express.Router();

// Export the database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// GET burgers database.
router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// POST burger data to the database.
router.post("/api/burgers", function (req, res) {
  burger.create(req.body, function (result) {
    res.json({ id: result.insertId });
  });
});

// PUT to update the burger data.
router.put("/api/burgers/:id", function (req, res) {
  let condition;

  burger.update(condition,req.params.id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// DELETE selected data from the database
router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;