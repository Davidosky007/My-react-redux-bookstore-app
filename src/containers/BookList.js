/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const filterChange = ({ target: { value } }) => changeFilter(value);
  return (
    <div>
      <h1>Book Store</h1>
      <CategoryFilter handleFilterChange={(e) => { filterChange(e); }} />
      <table>
        <thead>
          <tr>
            <th>BOOK ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.filter((book) => book.category === filter || filter === 'All').map((book) => (
            <Book key={`book-${book.id}`} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [
    {
      bookId: '1',
      title: 'Learning Redux',
      category: 'Learning',
    },
  ],
  removeBook: null,
  changeFilter: null,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
