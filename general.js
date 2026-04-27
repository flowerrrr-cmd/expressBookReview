const axios = require('axios');

// Get all books
async function getAllBooks() {
  try {
    const res = await axios.get("http://localhost:3000/books");
    console.log("All Books:", res.data);
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
}

// Get by ISBN
async function getByISBN(isbn) {
  try {
    const res = await axios.get(`http://localhost:3000/books/${isbn}`);
    console.log("By ISBN:", res.data);
  } catch (error) {
    console.error("Error fetching by ISBN:", error.message);
  }
}

// Get by Author
async function getByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:3000/books/author/${author}`);
    console.log("By Author:", res.data);
  } catch (error) {
    console.error("Error fetching by author:", error.message);
  }
}

// Get by Title
async function getByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/books/title/${title}`);
    console.log("By Title:", res.data);
  } catch (error) {
    console.error("Error fetching by title:", error.message);
  }
}

// Call all functions
getAllBooks();
getByISBN(1);
getByAuthor("Author A");
getByTitle("Book One");