import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './reducers';
import { createBook } from './actions/index';
import './index.css';

const store = configureStore();
const categories = ['Action', 'Horror', 'History', 'Kids', 'Biography', 'Learning', 'Sci-Fi'];
store.dispatch(createBook({ id: Math.floor(Math.random() * 100), title: 'Harry Potter', category: categories[6] }));
store.dispatch(createBook({ id: Math.floor(Math.random() * 100), title: 'Rich Kid Poor Dad', category: categories[4] }));
store.dispatch(createBook({ id: Math.floor(Math.random() * 100), title: 'How To Code In One Week', category: categories[2] }));
store.dispatch(createBook({ id: Math.floor(Math.random() * 100), title: 'Do Not Use Git Rebase', category: categories[1] }));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
