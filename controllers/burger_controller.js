var express = require("express");

var router = express.Router();

// Import the model (burger_models.js) to use its database functions.
var burgers = require("../models/burger_models.js");


// var connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/api/burger_controller", function(req, res) {

  burgers.available();

});

// Export routes for server.js to use.
module.exports = router;