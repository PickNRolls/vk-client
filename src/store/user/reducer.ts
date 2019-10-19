import UserState, {
  SET
} from './types';
import { AppActions } from '..';
import noAvatarImage from '../../assets/no-avatar.png';

const storageUser = JSON.parse(localStorage.getItem('user') || 'null');
const initialState: UserState = storageUser ? {
  ...storageUser,
  avatar: noAvatarImage
} : {
  firstName: '',
  lastName: '',
  fullName: '',
  id: '',
  age: 0,
  avatar: noAvatarImage,
  online: true,
  additionalInfo: {
    birthday: '',
  }
};

export default (state = initialState, action: AppActions): UserState => {
  switch (action.type) {
    case SET: {
      return {
        ...state,
        ...action.payload
      };
    }

    default: return state;
  }
};
