// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burgers = {
    available: function() {
      orm.availableSQLfncn( function(results) {
        console.log(result);
      });
    },

    insert: function() {
        orm.InsertBurgerSQLfncn( function(results) {
          console.log(result);
        });
      },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burgers;





// Export the database functions for the controller (catsController.js).
//module.exports = cat;