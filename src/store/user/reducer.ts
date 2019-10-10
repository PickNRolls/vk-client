import UserState, {
  UserActions,
  REQUEST_USER_SUCCESS
} from './types';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  fullName: '',
  id: '',
  age: 0,
  gender: true,
  avatar: '',
  online: true,
  additionalInfo: {
    birthday: '',
    languages: []
  },
  connections: {}
};

export default (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case REQUEST_USER_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
