// Import MySQL connection.
var connection = require("../config/connection.js");

//npm packages
var mysql = require("mysql");

var newBurger;
var sqlBurgerValues = [['cheese','1']];
var devoured; 
var available_burgers = [];

var orm = {
    devouredSQLfncn: function(cb) {
        var queryString = "SELECT CONCAT(id, '. ', burger_name) burger_name FROM burgers WHERE devoured = 1";
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
            cb(result);
        });
      },
 
      availableSQLfncn: function(callback) {
        var queryString = "SELECT CONCAT(id, '. ', burger_name) burger_name FROM burgers WHERE devoured = 0";  
        
        connection.query(queryString, function(error, result) {
          connection.end();
            if (error) return callback(error);
        
            for(var i = 0; i<result.length; i++){
              available_burgers.push(result[i].burger_name);
            }
            // console.log('available')
            // console.log(available_burgers);
            //  return available_burgers;
            callback(available_burgers);
        });
        // console.log(available_burgers);
        // var x = {"hello": "susan"}
        // callback(x);
      },


      InsertBurgerSQLfncn: function([sqlBurgerValues]) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ?";
        connection.query(queryString, [sqlBurgerValues], function(error, result) {
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
        });
      },

      DeleteBurgerSQLfncn: function([sqlBurgerValues], cb) {
        var queryString = "DELETE from burgers WHERE id = ?";
        connection.query(queryString, [devoured], function(error, result) {
            if (error) throw error;
            console.log("Number of records deleted: " + result.affectedRows);
            cb(result);
        });
      },

};

// Export the orm object for the model (cat.js).
module.exports = orm;

