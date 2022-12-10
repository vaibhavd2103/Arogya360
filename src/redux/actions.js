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
