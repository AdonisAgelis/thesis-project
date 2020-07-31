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
      if (this.props.type == 'save') {
        return(
          <MDBBtn id="save" outline color="success">
              <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
                Save
             </MDBBtn>)
      } else if (this.props.type == 'group') {
        return (
          <MDBDropdown>
            <MDBDropdownToggle id="dd1" caret  rounded outline color="white">
              Choose Group
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>School</MDBDropdownItem>
              <MDBDropdownItem>Family</MDBDropdownItem>
              <MDBDropdownItem>Couple</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
        )
      } else if (this.props.type == 'people') {
        return (
          <MDBDropdown>
            <MDBDropdownToggle caret id="dd2" rounded outline color="white">
              Number of people
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>1</MDBDropdownItem>
              <MDBDropdownItem>2</MDBDropdownItem>
              <MDBDropdownItem>3</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
        )
      } else if (this.props.type == 'add') {
        return (
          <MDBBtn id='add' outline color="white">Add</MDBBtn>
        )
      } else if (this.props.type == 'run') {
        return (
          <MDBBtn id="run" outline color="danger">
            <MDBIcon
              icon="tachometer-alt"
              style={{ marginRight: "1rem" }}
            />
            Run Simulation
        </MDBBtn>
        )
      }
    }
}

export default Buttons;