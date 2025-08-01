const express = require('express');
const app2 = express();
const PORT2 = 5000;

app2.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'Brave New World', author: 'Aldous Huxley', publishedYear: 1932 }
];

app2.get('/api/books', (req, res) => {
  res.json(books);
});

app2.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) 
    return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
});

app2.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app2.listen(PORT2, () => {
  console.log(`Book API running on http://localhost:${PORT2}`);
});
