const express = require('express');
const app = express();

app.use(express.json());

let books = {
  "1": { title: "Book One", author: "Author A", reviews: {} },
  "2": { title: "Book Two", author: "Author B", reviews: {} }
};

let users = [];

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get by ISBN
app.get('/books/:isbn', (req, res) => {
  res.json(books[req.params.isbn]);
});

// Get by author
app.get('/books/author/:author', (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.json(result);
});

// Get by title
app.get('/books/title/:title', (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.json(result);
});

// Get reviews
app.get('/books/:isbn/review', (req, res) => {
  res.json(books[req.params.isbn].reviews);
});

// Register
app.post('/register', (req, res) => {
  users.push(req.body);
  res.send("User registered successfully");
});

// Login
app.post('/login', (req, res) => {
  res.send("Login successful");
});

// Add review
app.post('/review/:isbn', (req, res) => {
  books[req.params.isbn].reviews["user"] = req.body.review;
  res.send("Review added successfully");
});

// Delete review
app.delete('/review/:isbn', (req, res) => {
  delete books[req.params.isbn].reviews["user"];
  res.send("Review deleted successfully");
});

app.listen(3000, () => console.log("Server running on port 3000"));