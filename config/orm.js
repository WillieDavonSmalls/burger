// Import MySQL connection.
var connection = require("../config/connection.js");

//npm packages
var mysql = require("mysql");

var newBurger;
var sqlBurgerValues = [[newBurger,'1']];
var devoured; 

var orm = {
    devouredSQLfncn: function() {
        var queryString = "SELECT id, burger_name FROM burgers WHERE devoured = 0";
        connection.query(queryString, function(err, result) {
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
        });
      },

      InsertBurgerSQLfncn: function([sqlBurgerValues]) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ?";
        connection.query(queryString, [sqlBurgerValues], function(err, result) {
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
        });
      },

      DeleteBurgerSQLfncn: function([sqlBurgerValues]) {
        var queryString = "DELETE from burgers WHERE id = ?";
        connection.query(queryString, [devoured], function(err, result) {
            if (error) throw error;
            console.log("Number of records deleted: " + result.affectedRows);
        });
      },

};

// Export the orm object for the model (cat.js).
module.exports = orm;

