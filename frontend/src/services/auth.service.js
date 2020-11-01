import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";

class AuthService {
  login = (email, password) => {
    return axios
      .post(API_URL + "signin", { email, password })
      .then((response) => {
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

  // sendRoomData = (name,
  //   entrance,
  //   exit,
  //   accessPoint,
  //   exhibit,
  //   wall,
  //   positionThatWillUndo,
  //   counterAccessPoint,
  //   counterExhibit,
  //   counterWall,
  //   counterAllPositions,
  //   allPositions,
  //   entranceBadge,
  //   exitBadge,
  //   accessPointBadge,
  //   exhibitBadge,
  //   height,
  //   width,
  //   isResized,
  //   dropdownSelectionsReducer) => {

  //   }
}

export default new AuthService();
