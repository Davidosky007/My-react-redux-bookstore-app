/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import userAvatarFilledAlt from '@iconify-icons/carbon/user-avatar-filled-alt';
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
      <div className="main-nav">
        <div className="nav-left">
          <a href="https://bukstur-app.herokuapp.com/" className="nav-main-title">Bookstore CMS</a>
          <span className="nav-books">BOOKS</span>
          <span className="cat-nav">CATEGORIES</span>
        </div>
        <div className="nav-icon">
          <a href="https://bukstur-app.herokuapp.com/">
            <Icon icon={userAvatarFilledAlt} color="#0290ff" width="45px" height="45px" />
          </a>
        </div>
      </div>
      <div className="float-rit">
        <span className="filter">
          Filtered by
          {' '}
          <CategoryFilter handleFilterChange={(e) => { filterChange(e); }} />
        </span>
      </div>
      <section className="main-books">
        {books.filter((book) => book.category === filter || filter === 'All').map((book) => (
          <Book key={`book-${book.id}`} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </section>
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
