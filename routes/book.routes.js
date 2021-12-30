const express = require("express");
const bookController = require("../controllers/book.controller");
const router = express.Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookById);


module.exports = router;