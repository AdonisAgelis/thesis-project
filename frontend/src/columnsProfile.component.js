import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNav,
  MDBContainer,
} from "mdbreact";
import "./profile.css";
import ModalPage from "./modal.component";

class ColumnsProfile extends React.Component {
  sendData = () => {
    this.props.parentCallback("2");
  };

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
                <MDBCardTitle
                  style={{
                    display: "grid",
                    placeItems: "center",
                    marginTop: "1rem",
                    color: "white",
                  }}
                >
                  <h4>
                    <MDBIcon icon="user-alt" /> Sensei
                  </h4>
                </MDBCardTitle>
                <hr className="hr" style={{ backgroundColor: "white" }}></hr>
                <MDBCol>
                  <MDBNav className="flex-column ">
                    <MDBBtn className="styleBtn" style={{ textAlign: "left" }}>
                      <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
                      Home
                    </MDBBtn>
                    <MDBBtn
                      className="styleBtn"
                      onClick={this.sendData}
                      style={{ textAlign: "left" }}
                    >
                      <MDBIcon
                        icon="plus-circle"
                        style={{ marginRight: "1rem" }}
                      />
                      New Template
                    </MDBBtn>
                    <MDBBtn className="styleBtn" style={{ textAlign: "left" }}>
                      <MDBIcon icon="sync" style={{ marginRight: "1rem" }} />
                      Load Template
                    </MDBBtn>
                    <MDBBtn className="styleBtn" style={{ textAlign: "left" }}>
                      <MDBIcon
                        icon="chart-area"
                        style={{ marginRight: "1rem" }}
                      />
                      Graphs
                    </MDBBtn>
                  </MDBNav>
                </MDBCol>
                <hr className="hr" style={{ backgroundColor: "white" }}></hr>
                <MDBContainer>
                  <MDBCol>
                    <MDBBtn
                      className="styleBtn"
                      style={{ textAlign: "center" }}
                    ></MDBBtn>
                  </MDBCol>
                </MDBContainer>
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
                style={{ backgroundColor: "121212" }}
                className="rounded mb-0"
              >
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h4 style={{ color: "white" }}>
                    <MDBIcon icon="building" style={{ marginRight: "1rem" }} />
                    Name of Room
                  </h4>
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  <hr className="hr" style={{ backgroundColor: "white" }}></hr>
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
                style={{ backgroundColor: "121212" }}
                className="rounded mb-0"
              >
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h4 style={{ color: "white" }}>
                    <MDBIcon icon="tools" style={{ marginRight: "1rem" }} />
                    Drag n Drop
                  </h4>
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  <hr className="hr" style={{ backgroundColor: "white" }}></hr>
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
