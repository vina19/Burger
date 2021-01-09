// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function() {
        
    },
    updateOne: function() {

    }
};

module.exports = burger;