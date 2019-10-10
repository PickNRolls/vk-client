import PageState, {
  PageActions,
  CHANGE_PAGE,
  CHANGE_META
} from './types';

const initialState: PageState = {
  name: 'messages',
  meta: {
    loadingDialogs: false
  }
};

export default (state = initialState, action: PageActions): PageState => {
  switch (action.type) {
    case CHANGE_PAGE: {
      const pageName = action.payload;

      switch (pageName) {
        case 'messages': {
          return {
            name: 'messages',
            meta: {}
          };
        }

        default: {
          return state;
        }
      }
    }

    case CHANGE_META: {
      return {
        ...state,
        meta: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
