/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>BOOK ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books && books.length
            ? books.map((book) => <Book key={`book-${book.id}`} book={book} handleRemoveBook={handleRemoveBook} />)
            : <tr><td>No booklist to show!</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any),
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [
    {
      bookId: 1,
      title: 'Learning Redux',
      category: 'Learning',
    },
  ],
  removeBook: null,
};

const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
