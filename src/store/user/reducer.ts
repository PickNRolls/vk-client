import UserState, {
  UserActions,
  REQUEST_USER,
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

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case REQUEST_USER: {
      return initialState;
    }

    case REQUEST_USER_SUCCESS: {
      console.log(action.payload);
      return action.payload;
    }

    default: {
      return initialState;
    }
  }
};
