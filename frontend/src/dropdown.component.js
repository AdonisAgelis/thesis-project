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

// this.dropdownItems[index].num.map((value, index) => {
//   return <MDBDropdownItem>{value}</MDBDropdownItem>;
// });

class DropDown extends React.Component {
  render() {
    console.log(`${this.props.something} in dropdown after render`);
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret id="dd2" rounded color="blue-grey">
          Number of people
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>{this.props.something}</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

export default DropDown;
