import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import configureStore from './reducers';
import './index.css';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Harry Potter',
      category: 'Sci-Fi',
    },
    {
      id: uuidv4(),
      title: 'Rich Kid Poor Dad',
      category: 'Learning',
    },
    {
      id: uuidv4(),
      title: 'How to code in one week',
      category: 'Action',
    },
    {
      id: uuidv4(),
      title: 'Do Not Use Git Rebase',
      category: 'Horror',
    },
  ],
};

const store = createStore(configureStore, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
