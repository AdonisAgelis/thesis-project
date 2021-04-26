import React, { useEffect, useState } from 'react';
import UserService from '../services/user-service';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from 'mdbreact';
import '../styles/index.css';
import kar from '../images/pexels-photo-1244705.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Landing = () => {
  const [content, setContent] = useState('');

  // useEffect(() => {
  //   UserService.getPublicContentHome().then(
  //     response => {
  //       setContent(response.data);
  //     },
  //     error => {
  //       setContent({
  //         content:
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString()
  //       });
  //     }
  //   );
  // });

  return (
    <div id="main">
      <Navbar />

      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBCol
                md="6"
                className="white-text text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold  mt-sm-5 ">
                    Museum User Tracker
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Web Application that simulates the movement of mobile users
                    inside interior enviroment. Log in and use the app.
                  </h6>
                  <a href="http://localhost:8081/login">
                    <MDBBtn color="white">Log in</MDBBtn>
                  </a>
                  <a href="http://localhost:8081/signup">
                    <MDBBtn outline color="white">
                      Sign Up
                    </MDBBtn>
                  </a>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src={kar}
                    alt=""
                    className="img-fluid1"
                    style={{ marginLeft: '5rem' }}
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <Footer />
    </div>
  );
};

export default Landing;
