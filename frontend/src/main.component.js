import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";
import "./index.css";
import kar from "./pexels-photo-1244705.png";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
class Main extends React.Component {
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
      <div id="apppage">
        <Router>
          <Navbar />
        </Router>
        
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold  mt-sm-5 ">
                      Museum User Tracker
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Web Application that simulates the movement of mobile
                      users inside interior enviroment. Log in and use the app.
                    </h6>
                    <MDBBtn color="white">Log in</MDBBtn>
                    <MDBBtn outline color="white">
                      Sign Up
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img src={kar} alt="" className="img-fluid" />
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

export default Main;
