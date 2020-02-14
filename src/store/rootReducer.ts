import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import history from 'browserHistory';
import userSlice from 'store/user';


const rootReducer = combineReducers({
  user: userSlice.reducer,
  router: connectRouter(history),
});

export default rootReducer;
