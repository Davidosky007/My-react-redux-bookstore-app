/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div>
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>Delete</button>
      </td>
    </tr>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    category: PropTypes.string.isRequired,
  })).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
