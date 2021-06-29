import React from 'react';
import PropTypes from 'prop-types';
import ProgressRing from './ProgressRing';

const Book = ({ book, handleRemoveBook }) => {
  const progressVal = Math.floor(Math.random() * 97);
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
        <ul className="remove-sect">
          <li className="buk-comments">Comments</li>
          <span className="line-1" />
          <li className="buk-remove">
            {' '}
            <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          </li>
          <span className="line-2" />
          <li className="buk-edit">Edit</li>
        </ul>
      </div>
      <div className="main-prog">
        <ProgressRing
          radius={80}
          stroke={10}
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
        <div className="curent-margin">
          <span className="curent-chap">CURRENT CHAPTER</span>
        </div>
        <div className="chap-margin">
          <span className="chap">CHAPTER 17</span>
        </div>
        <div className="curent-btn">
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
