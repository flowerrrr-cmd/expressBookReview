const axios = require('axios');

// Get all books
async function getAllBooks() {
  const res = await axios.get("http://localhost:3000/books");
  console.log("All Books:", res.data);
}

// Get by ISBN
async function getByISBN() {
  const res = await axios.get("http://localhost:3000/books/1");
  console.log("By ISBN:", res.data);
}

// Get by Author
async function getByAuthor() {
  const res = await axios.get("http://localhost:3000/books/author/Author A");
  console.log("By Author:", res.data);
}

// Get by Title
async function getByTitle() {
  const res = await axios.get("http://localhost:3000/books/title/Book One");
  console.log("By Title:", res.data);
}

// Run all
getAllBooks();
getByISBN();
getByAuthor();
getByTitle();
