import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

// Mock Data
const initialBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    publicationDate: '1925-04-10',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '9780060935467',
    publicationDate: '1960-07-11',
  },
];

const initialAuthors = [
  {
    name: 'F. Scott Fitzgerald',
    birthDate: '1896-09-24',
    biography: 'American novelist and short story writer.',
  },
  {
    name: 'Harper Lee',
    birthDate: '1926-04-28',
    biography: 'American novelist known for "To Kill a Mockingbird".',
  },
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [authors, setAuthors] = useState(initialAuthors);

  const handleAddBook = (values) => {
    setBooks([...books, values]);
  };

  const handleEditBook = (updatedBook) => {
    setBooks(books.map((book) =>
      book.isbn === updatedBook.isbn ? updatedBook : book
    ));
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const handleAddAuthor = (values) => {
    setAuthors([...authors, values]);
  };

  const handleEditAuthor = (updatedAuthor) => {
    setAuthors(authors.map((author) =>
      author.name === updatedAuthor.name ? updatedAuthor : author
    ));
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div className="App">
      <Dashboard
        books={books}
        authors={authors}
        onAddBook={handleAddBook}
        onEditBook={handleEditBook}
        onDeleteBook={handleDeleteBook}
        onAddAuthor={handleAddAuthor}
        onEditAuthor={handleEditAuthor}
        onDeleteAuthor={handleDeleteAuthor}
      />
    </div>
  );
};

export default App;
