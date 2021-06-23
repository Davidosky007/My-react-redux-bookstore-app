import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './reducers';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
