// Import MySQL connection.
let connection = require("../config/connection.js");

// Object for all our SQL statement functions.
let orm = {

    // Select everything from the database.
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },

    // Insert data to the database.
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + " SET ?";
        connection.query(queryString, value, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
    
    // Update data in the database.
    updateOne: function(table, condition, id, cb) {
        let queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        connection.query(queryString, id, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },

    // Delete selected data in the database
    delete: function(table, condition, cb) {
        let query = "DELETE FROM " + table + " WHERE " + condition;
        connection.query(query, function(err, result) {
          if (err) throw err;
    
          cb(result);
        });
      }
};

// Export the orm object for the model.
module.exports = orm;