import React from "react";

import { Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { dispatch, useDispatch, useSelector } from "react-redux";
import { useState, useHistory, useLoading } from "react";
import { login } from "../actions/auth";

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
import "../styles/login.css";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import authReducer from "../reducers/auth";
import messageReducer from "../reducers/message";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const history = useHistory();
  const isLoggedIn = useSelector((state) => state, authReducer.isLoggedIn);
  const message = useSelector((state) => state.messageReducer.message);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  if (true) {
    dispatch(login(email, password))
      .then(() => {
        // history.push("/workstation");
        window.location.reload();
      })
      .catch(() => {
        setLoading(true);
      });
  } else {
    setLoading(false);
  }

  return (
    <MDBAnimation type="fadeIn">
      <div id="login">
        <Navbar />
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    New here? Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Web Application that simulates the movement of mobile users
                    inside interior enviroment. Log in and use the app.
                  </h6>
                  <a href="http://localhost:3000/signup">
                    <MDBBtn outline color="white">
                      Sign Up
                    </MDBBtn>
                  </a>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card" style={{ marginLeft: "5rem" }}>
                      onSubmit={handleLogin}
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">Login</h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          onChange={onChangeEmail}
                          value={email}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          value={password}
                          onChange={onChangePassword}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="white">Login</MDBBtn>

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
                        <div className="text-center mt-2 white-text">
                          <a href="#" id="forgot">
                            Forgot password?
                          </a>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
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
export default LogIn;
