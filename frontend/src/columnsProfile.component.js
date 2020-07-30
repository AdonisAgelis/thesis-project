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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "./profile.css";

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
                <MDBNav className="flex-row" style={{ borderRadius: "1rem" }}>
                  <MDBBtn id="save" outline color="success">
                    <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
                    Save
                  </MDBBtn>
                  <MDBDropdown>
                    <MDBDropdownToggle caret id="dd1" color="warning">
                      Choose Group
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem>School</MDBDropdownItem>
                      <MDBDropdownItem>Family</MDBDropdownItem>
                      <MDBDropdownItem>Couple</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <MDBDropdown>
                    <MDBDropdownToggle caret id="dd2" outline color="danger">
                      Number of people
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem>1</MDBDropdownItem>
                      <MDBDropdownItem>2</MDBDropdownItem>
                      <MDBDropdownItem>3</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <div id="run">
                    <MDBBtn id="run" rounded outline color="danger">
                      <MDBIcon
                        icon="tachometer-alt"
                        style={{ marginRight: "1rem" }}
                      />
                      Run Simulation
                    </MDBBtn>
                  </div>
                </MDBNav>
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
