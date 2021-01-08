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
    selectAll: function() {

    },
    insertOne: function() {

    },
    updateOne: function() {

    }
};

module.exports = orm;