import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const configureStore = combineReducers({
  books, filter,
});

export default configureStore;
