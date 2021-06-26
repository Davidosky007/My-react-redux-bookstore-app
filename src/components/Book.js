import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="buks">
    <div>
      <div className="buk-cat">
        <span>{book.category}</span>
      </div>
      <div>
        <h3>{book.title}</h3>
      </div>
      <div>
        <span className="auth-name">Author Name</span>
      </div>
      <span className="remove-sect">
        <ul>
          <li>Comments</li>
          <li>
            {' '}
            <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          </li>
          <li>Edit</li>
        </ul>
      </span>
    </div>

  </div>

);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
