import AuthState, {
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from './types';
import { AppActions } from '..';

const isUserLoggedIn = JSON.parse(localStorage.getItem('user') || 'false');
const initialState: AuthState = {
  isUserLoggedIn
};

export default (state = initialState, action: AppActions): AuthState => {
  switch (action.type) {
    case SIGN_UP: {
      console.log('sign up..');
      return state;
    }

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isUserLoggedIn: true
      };
    }

    case SIGN_UP_FAIL: {
      console.log('sign up fail');
      console.log(action.payload);
      return state;
    }

    case SIGN_IN: {
      return {
        ...state,
        isUserLoggedIn: true
      };
    }

    default: {
      return state;
    }
  }
};
