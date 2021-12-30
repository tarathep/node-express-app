const DB = require("../database/db")

exports.getBooks = async (req, res, next) => {
    res.status(200).json(DB.findAll());
};


exports.getBookById = async (req, res, next) => {
  let result = DB.findById(req.params.id);
  console.log(typeof(result));
  if(result){
    res.status(200).json(result);
    return;
  }
  res.status(404).send();
};