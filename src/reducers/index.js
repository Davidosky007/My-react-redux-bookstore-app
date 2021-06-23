import { combineReducers } from 'redux';
import booksReducer from './books';

const configureStore = combineReducers({
  books: booksReducer,
});

export default configureStore;
