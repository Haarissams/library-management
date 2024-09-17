import React, { useState } from 'react';
import BookForm from './BookForm';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const editBook = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? book : b)));
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Books</h1>
      <BookForm
        onSubmit={editingBook ? editBook : addBook}
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
      />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (ISBN: {book.isbn}) - Published on {book.publicationDate}
            <button onClick={() => setEditingBook(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
