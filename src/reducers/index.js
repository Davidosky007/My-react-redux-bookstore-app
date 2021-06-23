import { combineReducers, createStore } from 'redux';
import booksReducer from './books';

const configureStore = () => createStore(
  combineReducers({
    books: booksReducer,
  }),
);

export default configureStore;
