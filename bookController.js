// In-memory storage
let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
];

// ✅ GET all books
const getBooks = (req, res) => {
  res.json({
    success: true,
    message: "Books retrieved successfully",
    data: books,
  });
};

// ✅ POST add new book
const addBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res
      .status(400)
      .json({ success: false, message: "Title and Author are required" });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
  };

  books.push(newBook);
  res.status(201).json({
    success: true,
    message: "Book added successfully",
    data: newBook,
  });
};

// ✅ PUT update book
const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find((b) => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  book.title = title || book.title;
  book.author = author || book.author;

  res.json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
};

// ✅ DELETE book
const deleteBook = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((b) => b.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  const deletedBook = books.splice(index, 1);

  res.json({
    success: true,
    message: "Book deleted successfully",
    data: deletedBook,
  });
};

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
};
