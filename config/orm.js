// Import MySQL connection.
const connection = require('./connection');

// Helper function to SQL syntax.
// Loops through and creates an array of questions marks and turns it into a string.
function printQuestionMarks(num) {
    let array = [];

    for (let i=0; i < num; i++) {
        array.push("?");
    };

    return array.toString();
};

// Helper function to convert object key/value pairs to SQL syntax.
function objToSql(ob) {
    let array = [];

    // Looping through the keys and push the key/value as a string int array.
    for (let key in ob) {
        let value = ob[key];

        // Check to skip hidden properties.
        if (Object.hasOwnProperty.call(ob, key)) {
            
            // if string with spaces, add quotations.
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };

            array.push(key + "=" + value);
        };
    };
    return array.toString();
};

// Object for all our SQL statement functions.
let orm = {

    // Select everything from the database.
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.queryString(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Insert data to the database.
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Update data in the database.
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;