const DB = require("../database/db.json");

function findById(id){
    return DB.find(book => book.id === id);
}

function findAll(){
    return DB;
}

module.exports = {findById , findAll};