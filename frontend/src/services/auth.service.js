import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";

class AuthService {
  login = (email, password) => {
    return axios
      .post(API_URL + "signin", { email, password })
      .then((response) => {
        console.log('Stamos');
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  };
}

export default new AuthService();
