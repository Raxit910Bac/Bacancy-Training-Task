const express = require("express");
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample books array
let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
];

// GET all books
app.get("/books", (req, res) => {
  res.status(200).json(books); 
})

// GET a book by ID
app.get("/books/:id", (req, res) => {
  const bookID = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookID);

  if(!book) {
    return res.status(404).json({message: "Book not found."});
  }

  res.status(200).json(book);
})

// Getting a book by passing ID in body.
// POST - Get a book by ID from request body
app.post("/books/getBookById", (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Book ID is required in the request body" });
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});


// POST - Add a new Book
app.post("/books", (req, res) => {
  const {title, author, year} = req.body;

  if(!title || !author || !year) {
    return res.status(400).json({message: "All fields are required"});
  }

  const newBook = {id: books.length + 1, ...req.body};
  books.push(newBook);

  res.status(200).json(newBook);
})


// PUT - Update a book by ID
app.put("/books/:id", (req, res) => {
  const bookID = parseInt(req.params.id);
  const {title, author, year} = req.body;
  const bookIndex = books.findIndex((b) => b.id === bookID);

  if(bookIndex === -1) {
    return res.status(404).json({message: "Book not found."});
  }

  books[bookIndex] = {id: bookID, title, author, year};

  res.status(200).json({message: "Book Data updated successfully.", book: books[bookIndex]})
})

// DELETE - Remove a book by ID
app.delete("/books/:id", (req, res) => {
  const bookID = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === bookID);

  if(bookIndex === -1) {
    return res.status(404).json({message: "Book not found"});
  }

  books.splice(bookIndex, 1);

  res.status(200).json({message: "Book deleted successfully."});
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});