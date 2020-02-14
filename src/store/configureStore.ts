import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from 'browserHistory';

import rootReducer from './rootReducer';
import { RootState } from './types';

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware<RootState>(),
    thunk as ThunkMiddleware,
    routerMiddleware(history),
  ],
});

declare global {
  interface Window {
    store: typeof store;
  }
}

window.store = store;

export default store;
