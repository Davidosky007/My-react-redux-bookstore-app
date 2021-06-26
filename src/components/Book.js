import React from 'react';
import PropTypes from 'prop-types';
import ProgressRing from './ProgressRing';

const Book = ({ book, handleRemoveBook }) => {
  const progressVal = Math.floor(Math.random() * 90);
  return (
    <div className="buks">
      <div>
        <div className="buk-cat">
          <span>{book.category}</span>
        </div>
        <div className="buk-title">
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
      <div className="main-prog">
        <ProgressRing
          radius={60}
          stroke={5}
          progress={progressVal}
        />
        <div className="complete">
          <h2 className="percent">
            {progressVal}
            %
          </h2>
          <span className="complete">Completed</span>
        </div>
      </div>
      <div className="current-chap">
        <div>
          <span>CURRENT CHAPTER</span>
        </div>
        <div>
          <span>CHAPTER 17</span>
        </div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
