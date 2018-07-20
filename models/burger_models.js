// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burgers = {
    available: function() {
      orm.availableSQLfncn( function(results) {
        console.log(result);
      });
    },

    insert: function(newBurger) {
        orm.InsertBurgerSQLfncn( newBurger, function(results) {
          console.log(results);
        });
      },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burgers;





// Export the database functions for the controller (catsController.js).
//module.exports = cat;