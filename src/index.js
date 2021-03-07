import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { forbiddenMiddleware } from './redux/middleware';
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';

const store = createStore( rootReducer, compose(
  applyMiddleware(thunk, forbiddenMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) )

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
