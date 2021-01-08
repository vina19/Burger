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

let orm = {
    selectAll: function() {

    },
    insertOne: function() {

    },
    updateOne: function() {

    }
};

module.exports = orm;