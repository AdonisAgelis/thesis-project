import axios from 'axios';

const API_URL = 'http://localhost:8082/api/';

//Info for Workspace change
//FIX ROUTES

class UserService {
  getPublicContentHome = () => {
    return axios.get(API_URL);
  };

  getPublicContentSignUp = () => {
    return axios.get(API_URL + 'signup');
  };

  getPublicContentLogIn = () => {
    return axios.get(API_URL + 'signin');
  };

  getPublicContentInfo = () => {
    return axios.get(API_URL + 'info');
  };
}

export default new UserService();
