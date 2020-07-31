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

class Buttons extends React.Component {
    render() {
        return(
            <div className='d-flex flex-row justify-content-around' style={{display: 'flex', flexWrap: 'wrap'}}>
                    <MDBBtn id="save" outline color="success">
                        <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
                        Save
                    </MDBBtn>
                  <MDBDropdown>
                    <MDBDropdownToggle id="dd1" caret  rounded outline color="warning">
                      Choose Group
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem>School</MDBDropdownItem>
                      <MDBDropdownItem>Family</MDBDropdownItem>
                      <MDBDropdownItem>Couple</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <MDBDropdown>
                    <MDBDropdownToggle caret id="dd2" rounded outline color="warning">
                      Number of people
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem>1</MDBDropdownItem>
                      <MDBDropdownItem>2</MDBDropdownItem>
                      <MDBDropdownItem>3</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                    <MDBBtn id='add' outline color="info">Add</MDBBtn>
                    <MDBBtn id="run" outline color="danger">
                      <MDBIcon
                        icon="tachometer-alt"
                        style={{ marginRight: "1rem" }}
                      />
                      Run Simulation
                    </MDBBtn>
                </div>
        )
    }
}

export default Buttons;