import UserState, {
  REQUEST_USER_SUCCESS
} from './types';
import { AppActions } from '..';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  fullName: '',
  id: '',
  age: 0,
  gender: true,
  avatar: '',
  online: true,
  friends: [],
  additionalInfo: {
    birthday: '',
    languages: []
  },
  connections: {}
};

export default (state = initialState, action: AppActions): UserState => {
  switch (action.type) {
    case REQUEST_USER_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
