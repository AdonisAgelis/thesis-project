import React, { useEffect, useState } from 'react';
import UserService from '../services/user-service';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from 'mdbreact';

import '../styles/info.css';
import mern from '../images/mern.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Info = () => {
  const [content, setContent] = useState('');

  // useEffect(() => {
  //   UserService.getPublicContentInfo().then(
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
    <MDBAnimation type="fadeIn">
      <div id="info">
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
                    Museum User Tracker
                  </h1>
                  <hr className="hr-light mr-5" />
                  <h6 className="mb-4 pr-4">
                    Museum User Tracker was created using the MERN Stack. MUT
                    tracks users via wifi that enter an interior enviroment and
                    makes graphs and heatmaps of their movement.
                  </h6>
                </MDBAnimation>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src={mern}
                      alt="MERN"
                      className="img-fluid"
                      style={{ marginLeft: '0.5rem' }}
                    />
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

export default Info;
