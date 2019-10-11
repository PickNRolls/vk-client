import AuthState, {
  AuthActions,
  SIGN_UP,
  SIGN_IN
} from './types';

const initialState: AuthState = {
  isUserLoggedIn: false
};

export default (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case SIGN_UP: {
      return state;
    }

    case SIGN_IN: {
      return state;
    }

    default: {
      return state;
    }
  }
};
