import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/api/auth/';

class AuthService {
  login = (email, password) => {
    return axios
      .post(API_URL + 'signin', { email, password })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  logout = () => {
    localStorage.removeItem('user');
  };

  register = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
    });
  };

  getUserWorkstation = localStorageUserId => {
    return axios.get(API_URL + 'workstation', {
      headers: authHeader(),
      data: localStorageUserId,
    });
  };

  sendRoomData = roomData => {
    console.log('Saved!');
    return axios.post(API_URL + 'workstation', {
      roomData,
    });
  };

  sendSimulationData = (
    typeOfGroup,
    numberOfPeopleInGroup,
    userID,
    nameOfTemplate,
    noSimSquares,
    leftSideWallArray,
    rightSideWallArray,
    topSideWallArray,
    botSideWallArray
  ) => {
    console.log('Sim data sent!');
    return axios.post(API_URL + 'simulation', {
      typeOfGroup,
      numberOfPeopleInGroup,
      userID,
      nameOfTemplate,
      noSimSquares,
      leftSideWallArray,
      rightSideWallArray,
      topSideWallArray,
      botSideWallArray,
    });
  };

  sendLocalStorageUserId = localStorageUserId => {
    return axios.post('http://localhost:8082/api/workstation', {
      localStorageUserId,
    });
  };

  sendLocalStorageUserIdToGraphs = localStorageUserId => {
    return axios.post('http://localhost:8082/api/workstation/graphs', {
      localStorageUserId,
    });
  };
}

export default new AuthService();
