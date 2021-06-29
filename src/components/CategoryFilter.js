import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'History', 'Horror', 'Kids', 'Biography', 'Learning'];

  return (
    <select className="select-filter" onChange={handleFilterChange}>
      {categories.map((book) => <option key={book} value={book}>{book}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
