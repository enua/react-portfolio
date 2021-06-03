import React from 'react';
import ReactDOM from 'react-dom';
import generateStore from './redux/store'
import { Provider } from 'react-redux'
import './index.css';
import App from './App.jsx';

const store = generateStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
