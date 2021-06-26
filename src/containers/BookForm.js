import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['Action', 'Horror', 'History', 'Kids', 'Biography', 'Learning', 'Sci-Fi'];

  const updateTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const updateCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createBook({
      id: uuidv4(),
      title: title.trim(),
      category,
    });
    setCategory('Action');
    setTitle('');
  };

  return (
    <div className="add-buk-main">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={updateTitleChange}
          required
        />
        <select value={category} onChange={updateCategoryChange}>
          {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});
BooksForm.propTypes = {
  createBook: PropTypes.func,
};
BooksForm.defaultProps = {
  createBook: null,
};
export default connect(null, mapDispatchToProps)(BooksForm);
