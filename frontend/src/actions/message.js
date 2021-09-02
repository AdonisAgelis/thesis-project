import { SET_MESSAGE, CLEAR_MESSAGE, SET_DATA } from './types';

export const setMessage = message => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const setData = data => ({
  type: SET_DATA,
  payload: data,
});
