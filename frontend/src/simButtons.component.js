import React from "react";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBView,
  MDBMask,
  MDBCardBody,
  MDBCol,
  MDBAnimation,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
  MDBCardText,
  MDBNav,
  MDBBtn,
} from "mdbreact";

import './profile.css';

class SimulationButtons extends React.Component {
    render() {
        return (
          <MDBContainer>
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
                  <MDBNav className="flex-row" style={{ borderRadius: "1rem" }}>
                    <div>
                      <MDBBtn id="save" outline color="success">
                        <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
                        Save
                      </MDBBtn>
                    </div>
                    <div>
                    <MDBDropdown>
                          <MDBDropdownToggle
                          caret
                          id="dd1"
                          rounded
                          outline
                          color="warning"
                          >
                          Choose Group
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                          <MDBDropdownItem>School</MDBDropdownItem>
                          <MDBDropdownItem>Family</MDBDropdownItem>
                          <MDBDropdownItem>Couple</MDBDropdownItem>
                          </MDBDropdownMenu>
                      </MDBDropdown>
                      <MDBDropdown>
                          <MDBDropdownToggle
                          caret
                          id="dd2"
                          rounded
                          outline
                          color="warning"
                          >
                          Number of people
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                          <MDBDropdownItem>1</MDBDropdownItem>
                          <MDBDropdownItem>2</MDBDropdownItem>
                          <MDBDropdownItem>3</MDBDropdownItem>
                          </MDBDropdownMenu>
                      </MDBDropdown>
                    </div>
                    <div>
                      <MDBBtn id='add' rounded outline color="info">
                        Add
                      </MDBBtn>
                    </div>
                    <div>
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
          </MDBContainer>
        )
    }
}

export default SimulationButtons;