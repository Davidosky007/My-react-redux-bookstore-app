import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Harry Potter',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Rich Kid Poor Dad',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'How to code in one week',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Do Not Use Git Rebase',
      category: 'Horror',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
