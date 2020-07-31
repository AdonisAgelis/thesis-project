import React from "react";

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
} from "mdbreact";

import "./profile.css";
import Background from "./columnsback.jpg";
import Buttons from "./buttons.component";

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
                borderRadius: "1rem",
                boxShadow: "20px 25px 10px rgba(24,24,24, .5)",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <MDBCardBody className="rounded mb-0">
                <MDBCardTitle
                  style={{
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "white",
                  }}
                >
                  <h4>
                    <MDBIcon
                      icon="user"
                      style={{
                        marginRight: "1rem",
                        marginBottom: "3rem",
                        marginTop: "2rem",
                      }}
                    />
                    Sensei
                  </h4>
                </MDBCardTitle>
                <hr
                  className="hrleft"
                  style={{ backgroundColor: "white" }}
                ></hr>
                <MDBCol>
                  <MDBNav className="flex-column   ">
                    <MDBBtn className="styleBtn">
                      <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
                      Home
                    </MDBBtn>
                    <MDBBtn className="styleBtn" onClick={this.sendData}>
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
                  </MDBNav>
                </MDBCol>
                <hr style={{ backgroundColor: "white" }}></hr>
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
                borderRadius: "1rem",
                boxShadow: "20px 25px 10px rgba(24,24,24, .5)",
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
                <canvas id="myCanvas"></canvas>
               <Buttons />
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
                borderRadius: "1rem",
                boxShadow: "20px 25px 10px rgba(24,24,24, .5)",
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
                    Drag & Drop
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
