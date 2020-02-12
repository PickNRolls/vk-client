import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createBrowserHistory } from 'history';
import 'bootstrapFirebase';

import * as serviceWorker from 'serviceWorker';
import { createRootReducer, AppState, AppActions } from 'store';
import App from 'App';
import './index.css';
import 'api';

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      thunk as ThunkMiddleware<AppState, AppActions>,
      routerMiddleware(history)
    )
  )
);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
