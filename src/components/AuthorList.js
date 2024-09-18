import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      <h2>Author List</h2>
      <ul className="list">
        {authors.length > 0 ? (
          authors.map((author, index) => (
            <li key={index} className="list-item">
              <div className="list-item-content">
                <strong>{author.name}</strong>
                <span>Date of Birth: {new Date(author.birthDate).toLocaleDateString()}</span>
                <p>{author.biography}</p>
              </div>
              <div className="list-item-actions">
                <button className="edit-button" onClick={() => onEdit(author)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(author.name)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No authors available.</p>
        )}
      </ul>
    </div>
  );
};

export default AuthorList;
