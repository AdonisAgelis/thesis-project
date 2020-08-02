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
import DropDown from "./dropdown.component";

// this.dropdownItems[index].num.map((value, index) => {
//   return <MDBDropdownItem>{value}</MDBDropdownItem>;
// });

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 3,
    };
  }

  handleDropDown = async (index) => {
    await this.setState({ test: index });
    console.log(this.state.test);
  };

  afterClickOnDropDown = () => {
    // await na gini to handle drop down
  };

  dropdownItems = [
    {
      type: "School",
      num: [5, 10, 15],
      isActive: 1,
    },
    {
      type: "Family",
      num: [3, 4, 5, 6],
      isActive: 2,
    },
    {
      type: "Other",
      num: [2, 3, 4],
      isActive: 3,
    },
    {
      type: "Choose Group",
      isActive: 4,
    },
  ];

  sendColumnMidIsOpen = () => {
    this.props.func("2");
  };

  render() {
    console.log(`${this.state.test} in buttons after render`);
    if (this.props.type === "save") {
      return (
        <MDBBtn id="save" rounded color="success">
          <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
          Save
        </MDBBtn>
      );
    } else if (this.props.type === "people") {
      console.log(`${this.state.test} refreshed`);
      return <DropDown something={this.state.test} />;
    } else if (this.props.type === "group") {
      return (
        <MDBDropdown>
          <MDBDropdownToggle id="dd1" caret rounded color="blue-grey">
            {this.dropdownItems[this.state.test].type}
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem onClick={() => this.handleDropDown(0)}>
              {this.dropdownItems[0].type}
            </MDBDropdownItem>
            <MDBDropdownItem onClick={() => this.handleDropDown(1)}>
              {this.dropdownItems[1].type}
            </MDBDropdownItem>
            <MDBDropdownItem onClick={() => this.handleDropDown(2)}>
              {this.dropdownItems[2].type}
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      );
    } else if (this.props.type === "add") {
      return (
        <MDBBtn id="add" color="blue-grey">
          <MDBIcon icon="arrow-alt-circle-up" /> Add
        </MDBBtn>
      );
    } else if (this.props.type === "run") {
      return (
        <MDBBtn id="run" rounded color="danger">
          <MDBIcon icon="tachometer-alt" style={{ marginRight: "1rem" }} />
          Run Simulation
        </MDBBtn>
      );
    } else if (this.props.type === "home") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
          Home
        </MDBBtn>
      );
    } else if (this.props.type === "new") {
      return (
        <MDBBtn className="styleBtn" onClick={this.sendColumnMidIsOpen}>
          <MDBIcon icon="plus-circle" style={{ marginRight: "1rem" }} />
          New Template
        </MDBBtn>
      );
    } else if (this.props.type === "load") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="sync" style={{ marginRight: "1rem" }} />
          Load Template
        </MDBBtn>
      );
    } else if (this.props.type === "graph") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="chart-area" style={{ marginRight: "1rem" }} />
          Graphs
        </MDBBtn>
      );
    } else if (this.props.type === "logout") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="sign-out-alt" style={{ marginRight: "1rem" }} />
          Log Out
        </MDBBtn>
      );
    } else if (this.props.type === "reset") {
      return (
        <MDBBtn className="styleBtn" style={{ marginTop: "5rem" }}>
          <MDBIcon icon="undo" style={{ marginRight: "1rem" }} />
          Reset Password
        </MDBBtn>
      );
    }
  }
}

export default Buttons;
