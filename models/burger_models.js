// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var available_burgers = [];
var burgers = {
    available: function(callback) {
      orm.availableSQLfncn( function(results) {
        callback(results);
      });
      // var x = {"hello": "john"}
      // callback(x);
    },

    insert: function(newBurger) {
        orm.InsertBurgerSQLfncn( newBurger);
      }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burgers;





// Export the database functions for the controller (catsController.js).
//module.exports = cat;