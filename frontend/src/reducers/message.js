import { SET_MESSAGE, CLEAR_MESSAGE, SET_DATA } from '../actions/types';

const initialState = {};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(`This is the type: ${type}`);
  // console.log(`This is the payload: ${Object.values(payload)}`);

  switch (type) {
    case SET_DATA:
      return { data: payload };
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: '' };
    default:
      return state;
  }
};

export default messageReducer;
