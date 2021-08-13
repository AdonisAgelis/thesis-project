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
        console.log(response.data);
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

  sendSimulationData = simData => {
    console.log('Sim data sent!');
    return axios.post(API_URL + 'simulation', {
      simData,
    });
  };

  sendLocalStorageUserId = localStorageUserId => {
    console.log('User Id was send succesfully!');
    return axios.post('http://localhost:8082/api/' + 'workstation', {
      localStorageUserId,
    });
  };
}

export default new AuthService();