// Import MySQL connection.
var connection = require("../config/connection.js");

//npm packages
var mysql = require("mysql");

var newBurger;
var sqlBurgerValues = [[newBurger,'1']];
var devoured; 

var orm = {
    devouredSQLfncn: function(cb) {
        var queryString = "SELECT CONCAT(id, '. ', burger_name) burger_name FROM burgers WHERE devoured = 1";
        connection.query(queryString, function(err, result) {
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
            cb(result);
        });
      },

      availableSQLfncn: function() {
        var queryString = "SELECT CONCAT(id, '. ', burger_name) burger_name FROM burgers WHERE devoured = 0";  
        available_burgers = [];
        connection.query(queryString, function(error, result) {
            if (error) throw error;
        
            for(var i = 0; i<result.length; i++){
              available_burgers.push(result[i].burger_name);
            }
             console.log(available_burgers);
        });
        return available_burgers;
        
      },

      InsertBurgerSQLfncn: function([sqlBurgerValues], cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ?";
        connection.query(queryString, [sqlBurgerValues], function(err, result) {
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
            cb(result);
        });
      },

      DeleteBurgerSQLfncn: function([sqlBurgerValues], cb) {
        var queryString = "DELETE from burgers WHERE id = ?";
        connection.query(queryString, [devoured], function(err, result) {
            if (error) throw error;
            console.log("Number of records deleted: " + result.affectedRows);
            cb(result);
        });
      },

};

// Export the orm object for the model (cat.js).
module.exports = orm;

