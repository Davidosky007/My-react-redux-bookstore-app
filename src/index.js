import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './reducers';
import { createBook } from './actions/index';
import './index.css';

const store = configureStore();
const categories = ['Action', 'Horror', 'History', 'Kids', 'Biography', 'Learning', 'Sci-Fi'];
store.dispatch(createBook({ title: 'Harry Potter', category: categories[6] }));
store.dispatch(createBook({ title: 'Rich Kid Poor Dad', category: categories[4] }));
store.dispatch(createBook({ title: 'How To Code In One Week', category: categories[2] }));
store.dispatch(createBook({ title: 'Do Not Use Git Rebase', category: categories[1] }));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
