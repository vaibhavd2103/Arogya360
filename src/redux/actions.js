import types from '../redux/types';

export const setAuthenticated = data => ({
  type: types.IS_AUTHENTICATED,
  payload: data,
});
export const setToken = data => ({
  type: types.TOKEN,
  payload: data,
});
export const setUserId = data => ({
  type: types.USER_ID,
  payload: data,
});
export const setUserType = data => ({
  type: types.USER_TYPE,
  payload: data,
});
export const setUserData = data => ({
  type: types.USER,
  payload: data,
});
export const resetRedux = data => ({
  type: types.RESET,
  payload: data,
});
