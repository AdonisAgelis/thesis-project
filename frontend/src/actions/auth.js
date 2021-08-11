import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  SEND_ROOM_DATA_SUCCESS,
  SEND_ROOM_DATA_FAIL,
  SEND_LOCAL_STORAGE_ID_SUCCESS,
  SEND_LOCAL_STORAGE_ID_FAIL,
  SEND_SIMULATION_DATA_SUCCESS,
  SEND_SIMULATION_DATA_FAIL,
} from './types';

import AuthService from '../services/auth-service';

export const register = (username, email, password) => dispatch => {
  return AuthService.register(username, email, password).then(
    response => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => dispatch => {
  return AuthService.login(email, password).then(
    data => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => dispatch => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const sendRoomData = roomData => dispatch => {
  AuthService.sendRoomData(roomData).then(
    response => {
      dispatch({
        type: SEND_ROOM_DATA_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SEND_ROOM_DATA_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};

export const sendLocalStorageUserId = localStorageUserId => dispatch => {
  AuthService.sendLocalStorageUserId(localStorageUserId).then(
    response => {
      dispatch({
        type: SEND_LOCAL_STORAGE_ID_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data,
      });

      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SEND_LOCAL_STORAGE_ID_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};

export const sendSimulationData = simData => dispatch => {
  AuthService.sendSimulationData(simData).then(
    response => {
      dispatch({
        type: SEND_SIMULATION_DATA_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data,
      });

      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SEND_SIMULATION_DATA_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};
