import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

class UserService {
  getPublicContentHome = () => {
    return axios.get(API_URL);
  };

  getPublicContentSignUp = () => {
    return axios.get(API_URL + "signup");
  };

  getPublicContentLogIn = () => {
    return axios.get(API_URL + "login");
  };

  getPublicContentInfo = () => {
    return axios.get(API_URL + "info");
  };

  getUserWorkstation = () => {
    return axios.get(API_URL + "workstation", { headers: authHeader() });
  };
};

export default new UserService();
