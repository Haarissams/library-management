import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      <h2>Book List</h2>
      <ul className="list">
        {books.length > 0 ? (
          books.map((book, index) => (
            <li key={index} className="list-item">
              <div className="list-item-content">
                <strong>{book.title}</strong>
                <span>Author: {book.author}</span>
                <span>ISBN: {book.isbn}</span>
                <span>Publication Date: {new Date(book.publicationDate).toLocaleDateString()}</span>
              </div>
              <div className="list-item-actions">
                <button className="edit-button" onClick={() => onEdit(book)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(book.isbn)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
