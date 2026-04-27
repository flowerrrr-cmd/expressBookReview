const axios = require('axios');

async function getAllBooks() {
  try {
    const res = await axios.get("http://localhost:3000/books");
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
}

async function getByISBN(isbn) {
  try {
    const res = await axios.get(`http://localhost:3000/books/${isbn}`);
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching by ISBN:", error.message);
  }
}

async function getByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:3000/books/author/${author}`);
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching by author:", error.message);
  }
}

async function getByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/books/title/${title}`);
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching by title:", error.message);
  }
}

// Call functions
getAllBooks();
getByISBN(1);
getByAuthor("Author A");
getByTitle("Book One");
