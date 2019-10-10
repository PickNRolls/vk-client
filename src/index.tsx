import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer, AppState, AppActions } from './store';
import { Provider } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCTkJ2p7ggiKkPU8MLvo7jJk3MsxmYc4FU',
  authDomain: 'vkontaktlyah.firebaseapp.com',
  databaseURL: 'https://vkontaktlyah.firebaseio.com',
  projectId: 'vkontaktlyah',
  storageBucket: 'vkontaktlyah.appspot.com',
  messagingSenderId: '767305225250',
  appId: '1:767305225250:web:58bd6ca2ae3ef14dc9267b'
};

firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
