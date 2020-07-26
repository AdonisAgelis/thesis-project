import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import "./info.css";

import mern from "./mern.png";
import Navbar from "./navbar.component.js";
import Footer from "./footer.component";

class Info extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="info">
        <Navbar />

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Museum User Tracker
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Museum User Tracker was created using the MERN Stack. MUT
                      tracks users via wifi that enter an interior enviroment
                      and makes graphs and heatmaps of their movement.
                    </h6>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img src={mern} alt="" className="img-fluid" />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <Footer />
      </div>
    );
  }
}

export default Info;
