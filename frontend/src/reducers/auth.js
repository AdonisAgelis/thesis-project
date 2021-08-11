import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SEND_ROOM_DATA_SUCCESS,
  SEND_ROOM_DATA_FAIL,
  SEND_SIMULATION_DATA_SUCCESS,
  SEND_SIMULATION_DATA_FAIL,
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case SEND_ROOM_DATA_SUCCESS:
      return {
        ...state,
      };
    case SEND_ROOM_DATA_FAIL:
      return {
        ...state,
      };
    case SEND_SIMULATION_DATA_SUCCESS:
      return {
        ...state,
      };
    case SEND_SIMULATION_DATA_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
