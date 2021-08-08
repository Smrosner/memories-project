import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

// Redux middleware are actually implemented on top of a very special store enhancer that comes built in with Redux, called applyMiddleware.

// compose lets you write deeply nested function transformations without the rightward drift of the code

// Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
