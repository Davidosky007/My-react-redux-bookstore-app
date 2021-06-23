/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => (
  <div className="App">
    <BookList />
    <BookForm />
  </div>
);

export default App;
