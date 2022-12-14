import types from '../redux/types';

const initialState = {
  isAuthenticated: false,
  user_id: '',
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case types.USER_ID:
      return {
        ...state,
        user_id: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
