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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu
} from "mdbreact";
import "./profile.css";

class ColumnsProfile extends React.Component {
  render() {
    if (this.props.columnPos == 2) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBCard
            style={{
              height: "40rem",
            }}
          >
            <MDBCardBody className="rounded mb-0 gradient">
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
              {/* <MDBCardText style={{textAlign: 'center'}}>
                            
                        </MDBCardText> */}
              <div className="profBtn">
                <MDBBtn className="styleBtn" gradient>
                  New Template
                </MDBBtn>
                <MDBDropdown>
                  <MDBDropdownToggle caret className='styleBtn'>
                    Load Template
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Template 1</MDBDropdownItem>
                    <MDBDropdownItem>Template 2</MDBDropdownItem>
                    <MDBDropdownItem>Template 3</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
              <div className="profBtn">
                <MDBBtn id="runBtn" className="styleBtn" gradient>
                  Run Simulation
                </MDBBtn>
              </div>
              <hr className="hr" style={{ backgroundColor: "white" }}></hr>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    } else if (this.props.columnPos == 7) {
      return (
        <MDBCol md={this.props.columnPos}>
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
        </MDBCol>
      );
    } else if (this.props.columnPos == 3) {
      return (
        <MDBCol md={this.props.columnPos}>
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
        </MDBCol>
      );
    }
  }
}

export default ColumnsProfile;
