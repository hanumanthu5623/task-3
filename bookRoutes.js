const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// GET all books
router.get("/", bookController.getBooks);

// POST new book
router.post("/", bookController.addBook);

// PUT update book
router.put("/:id", bookController.updateBook);

// DELETE remove book
router.delete("/:id", bookController.deleteBook);

module.exports = router;
