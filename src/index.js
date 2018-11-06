import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoList from './reducers';

const store = createStore(todoList);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  rootEl
);

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     const NextApp = require('./components/App').default
//     ReactDOM.render(
//       <NextApp />,
//       rootEl
//     )
//   });
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
