import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import AuthorForm from '../components/AuthorForm';
import BookList from '../components/BookList';
import AuthorList from '../components/AuthorList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAddBook = (values) => {
    if (selectedBook) {
      setBooks(books.map(book => (book.isbn === selectedBook.isbn ? values : book)));
    } else {
      setBooks([...books, values]);
    }
    setSelectedBook(null);
  };

  const handleAddAuthor = (values) => {
    if (selectedAuthor) {
      setAuthors(authors.map(author => (author.name === selectedAuthor.name ? values : author)));
    } else {
      setAuthors([...authors, values]);
    }
    setSelectedAuthor(null);
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
  };

  const handleEditAuthor = (author) => {
    setSelectedAuthor(author);
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter(book => book.isbn !== isbn));
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter(author => author.name !== name));
  };

  return (
    <div className="dashboard">
      <div className="form-section">
        <h1>Library Management Dashboard</h1>
        <BookForm
          initialValues={selectedBook || { title: '', author: '', isbn: '', publicationDate: '' }}
          onSubmit={handleAddBook}
        />
        <AuthorForm
          initialValues={selectedAuthor || { name: '', birthDate: '', biography: '' }}
          onSubmit={handleAddAuthor}
        />
      </div>
      <div className="list-section">
        <BookList
          books={books}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        />
        <AuthorList
          authors={authors}
          onEdit={handleEditAuthor}
          onDelete={handleDeleteAuthor}
        />
      </div>
    </div>
  );
};

export default Dashboard;
