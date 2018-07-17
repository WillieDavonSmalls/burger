var express = require("express");

var router = express.Router();

// Import the model (burger_models.js) to use its database functions.
var burger = require("../models/burger_models.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/api/burger_controller", function(req, res) {
  orm.devouredSQLfncn(function(err, results) {
    if (err) res.status(500).send(err); // There was a problem, respond with a 500

    // Send back the ID of the new quote
    console.log(results);
    res.json(results);
  });
});

// Export routes for server.js to use.
module.exports = router;