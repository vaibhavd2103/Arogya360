import authTypes, {types} from '../redux/types';

export const setAuthenticated = data => ({
  type: authTypes.IS_AUTHENTICATED,
  payload: data,
});
export const setToken = data => ({
  type: authTypes.TOKEN,
  payload: data,
});
export const setUserId = data => ({
  type: authTypes.USER_ID,
  payload: data,
});
