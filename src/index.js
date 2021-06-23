import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './reducers';
import './index.css';

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

const store = createStore(configureStore, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
