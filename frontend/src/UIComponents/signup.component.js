import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";
import "../styles/signup.css";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const dispatch = useDispatch();

  let placeholderUsername = usernameIsValid
    ? "Your name"
    : "Username must be 3-20 characters!";

  let placeholderEmail = emailIsValid
    ? 'Your email'
    : 'Invalid Email!';

  let placeholderPassword = passwordIsValid
    ? 'Your password'
    : 'Invalid Password!';

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkEmail = (email) => {
    const validEmail = /\S+@\S+\.\S+/g;
    return validEmail.test(email);
  };

  const validatedEmail = checkEmail(email);

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    const passUpper = /[A-Z]/g;
    const passLower = /[a-z]/g;
    const passNumber = /[0-9]/g;
    const passSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;

    const passwordUpper = password.search(passUpper);
    const passwordLower = password.search(passLower);
    const passwordNumber = password.search(passNumber);
    const passwordSymbol = password.search(passSymbol);

    if (
      username.length >= 3 &&
      username.length <= 20 &&
      password.length >= 4 &&
      password.length <= 15 &&
      passwordUpper != -1 &&
      passwordLower != -1 &&
      passwordNumber != -1 &&
      passwordSymbol != -1 &&
      validatedEmail === true
    ) {
      alert("Successful Sign Up!");
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    } else if (username.length < 3 || username.length > 20) {
      setUsernameIsValid(false);
      console.log("Wrong Username!");
    } else if (validatedEmail === false) {
      setEmailIsValid(false);
      console.log('Wrong email!');
    } else if (passwordUpper === -1 || passwordLower === -1 || passwordNumber === -1 || passwordSymbol === -1) {
      setPasswordIsValid(false);
      console.log("Wrong Password!");
    }
  };

  return (
    <MDBAnimation type="fadeIn">
      <div id="signup">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <Navbar />
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Web Application that simulates the movement of mobile users
                    inside interior enviroment. Log in and use the app.
                  </h6>
                  <a href="http://localhost:3000/info">
                    <MDBBtn outline color="white">
                      Learn More
                    </MDBBtn>
                  </a>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <form onSubmit={handleRegister}>
                      <MDBCard id="classic-card" style={{ marginLeft: "5rem" }}>
                        <MDBCardBody className="white-text">
                          <h3 className="text-center">Sign Up</h3>
                          <hr className="hr-light" />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            name="username"
                            type="text"
                            label={placeholderUsername}
                            icon="user"
                            onChange={onChangeUsername}
                            required
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            name="email"
                            type="email"
                            label={placeholderEmail}
                            icon="envelope"
                            onChange={onChangeEmail}
                            required
                          />
                          <MDBInput
                            className="white-text form-control"
                            iconClass="white-text"
                            name="password"
                            type="password"
                            label={placeholderPassword}
                            icon="lock"
                            onChange={onChangePassword}
                            required
                          />
                          <div className="text-center mt-4 black-text">
                            <MDBBtn color="white" type="submit" value="submit">
                              Sign Up
                            </MDBBtn>
                            <hr className="hr-light" />
                            <div className="text-center d-flex justify-content-center white-label">
                              <a href="#!" className="p-2 m-2">
                                <MDBIcon
                                  fab
                                  icon="twitter"
                                  className="white-text"
                                />
                              </a>
                              <a href="#!" className="p-2 m-2">
                                <MDBIcon
                                  fab
                                  icon="linkedin"
                                  className="white-text"
                                />
                              </a>
                              <a href="#!" className="p-2 m-2">
                                <MDBIcon
                                  fab
                                  icon="instagram"
                                  className="white-text"
                                />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </form>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <Footer />
      </div>
    </MDBAnimation>
  );
};

export default SignUp;
