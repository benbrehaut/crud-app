import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import decode from 'jwt-decode';

import rootReducer from './rootReducer'
import { userLoggedIn } from './actions/auth';

import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Create store
 */
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

/**
 * If user is lgoged in, dispatch to the store
 */
if (localStorage.bookwormJWT) {
  const payload = decode(localStorage.bookwormJWT)
  const user = {
    token: localStorage.bookwormJWT,
    email: payload.email,
    confirmed: payload.confirmed
  }
  store.dispatch(userLoggedIn(user))
}

/**
 * Render App
 */
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
