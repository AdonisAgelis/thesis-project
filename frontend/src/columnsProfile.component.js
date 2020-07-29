import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBAnimation,
  MDBBtnGroup,
  MDBNav,
  MDBNavLink,
} from "mdbreact";
import "./profile.css";

class ColumnsProfile extends React.Component {
  render() {
    if (this.props.columnPos == 2) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".3s">
            <MDBCard
              style={{
                height: "40rem",
              }}
            >
              <MDBCardBody className="rounded mb-0">
                <img
                  id="avatar"
                  className="rounded-circle"
                  src="https://wireless.uop.gr/images/instructors/Dr-Tselikas.jpg"
                ></img>
                <MDBCardTitle
                  style={{
                    display: "grid",
                    placeItems: "center",
                    marginTop: "1rem",
                    color: "white",
                  }}
                >
                  Sensei
                </MDBCardTitle>
                <hr className="hr" style={{ backgroundColor: "white" }}></hr>
                <MDBCol>
                  <MDBNav className="flex-column   ">
                    <MDBBtn className="styleBtn">
                      <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
                      Home
                    </MDBBtn>
                    <MDBBtn className="styleBtn">
                      <MDBIcon
                        icon="plus-circle"
                        style={{ marginRight: "1rem" }}
                      />
                      New Template
                    </MDBBtn>
                    <MDBBtn className="styleBtn">
                      <MDBIcon icon="sync" style={{ marginRight: "1rem" }} />
                      Load Template
                    </MDBBtn>
                    <MDBBtn className="styleBtn">
                      <MDBIcon
                        icon="chart-area"
                        style={{ marginRight: "1rem" }}
                      />
                      Graphs
                    </MDBBtn>
                    <MDBBtn className="styleBtn">
                      <MDBIcon
                        icon="tachometer-alt"
                        style={{ marginRight: "1rem" }}
                      />
                      Run Simulation
                    </MDBBtn>
                  </MDBNav>
                </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    } else if (this.props.columnPos == 7) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".4s">
            <MDBCard
              style={{
                height: "40rem",
              }}
            >
              <MDBCardImage className="img-fluid" />
              <MDBCardBody
                style={{ backgroundColor: "white" }}
                className="rounded mb-0"
              >
                <MDBCardTitle style={{ textAlign: "center" }}>
                  DimitraPap
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  El Bouti8o
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    } else if (this.props.columnPos == 3) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".5s">
            <MDBCard
              style={{
                height: "40rem",
              }}
            >
              <MDBCardImage className="img-fluid" />
              <MDBCardBody
                style={{ backgroundColor: "white" }}
                className="rounded mb-0"
              >
                <MDBCardTitle style={{ textAlign: "center" }}>
                  DimitraPap
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  El Bouti8o
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    }
  }
}

export default ColumnsProfile;
