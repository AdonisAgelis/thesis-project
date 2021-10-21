import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

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
} from 'mdbreact';

import '../styles/login.css';
import Navbar from './Navbar';
import Footer from './Footer';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let [toWorkstation, setToWorkstation] = useState(false);

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = e => {
    e.preventDefault();
    // From actions/auth.js
    dispatch(login(email, password))
      .then(() => {
        setToWorkstation(true);
        // window.location.reload();
      })
      .catch(() => {
        setLoading(true);
        window.alert('Wrong email or password! Try again!');
      });
  };

  return (
    <MDBAnimation type="fadeIn">
      {toWorkstation ? <Redirect to="/workstation" /> : null}
      <div id="login">
        <Navbar />
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    New here? Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Web Application that simulates the movement of mobile users
                    inside interior enviroment. Log in and use the app.
                  </h6>
                  <a href="http://localhost:8081/signup">
                    <MDBBtn outline color="white">
                      Sign Up
                    </MDBBtn>
                  </a>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <form className="needs-validation" onSubmit={handleLogin}>
                      <MDBCard id="classic-card" style={{ marginLeft: '5rem' }}>
                        <MDBCardBody className="white-text">
                          <h3 className="text-center">Login</h3>
                          <hr className="hr-light" />
                          <MDBInput
                            className="white-text form-control"
                            iconClass="white-text"
                            name="email"
                            label="Your email"
                            icon="envelope"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid email.
                          </div>
                          <MDBInput
                            className="white-text form-control"
                            iconClass="white-text"
                            name="password"
                            label="Your password"
                            icon="lock"
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                          />
                          <div className="text-center mt-4 black-text">
                            <MDBBtn color="white" type="submit" value="submit">
                              Login
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
                          <div className="text-center mt-2 white-text">
                            <a href="#" id="forgot">
                              Forgot password?
                            </a>
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

export default LogIn;
