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
  constructor(props) {
    super(props);

    this.state = {
      test: 3,
      people: "NUMBER OF PEOPLE",
    };
  }

  handleDropDown = async (index, testing) => {
    await this.setState({ test: index });
    console.log(this.state.test);
  };

  handleSecondDropDown = async (testing) => {
    await this.setState({ people: testing });
    console.log(this.state.people);
  };

  groupDropDownOptions = (x, y) => {
    const array = y[x].num.map((value) => (
      <MDBDropdownItem onClick={() => this.handleSecondDropDown(value)}>
        {value}
      </MDBDropdownItem>
    ));
    return <MDBDropdownMenu basic>{array}</MDBDropdownMenu>;
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
      num: ["Choose a group first!"],
      isActive: 4,
    },
  ];

  sendColumnMidIsOpen = () => {
    this.props.func("2");
  };

  render() {
    let i = this.state.test;

    if (this.props.type === "save") {
      return (
        <MDBBtn id="save" rounded color="success">
          <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
          Save
        </MDBBtn>
      );
    } else if (this.props.type === "group") {
      return (
        <div className="d-flex flex-row justify-content-around">
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
          <MDBDropdown>
            <MDBDropdownToggle caret id="dd2" rounded color="blue-grey">
              {this.state.people}
            </MDBDropdownToggle>
            {this.groupDropDownOptions(this.state.test, this.dropdownItems)}
          </MDBDropdown>
        </div>
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
        <MDBBtn className="styleBtn2">
          <MDBIcon icon="sign-out-alt" style={{ marginRight: "1rem" }} />
          Log Out
        </MDBBtn>
      );
    } else if (this.props.type === "reset") {
      return (
        <MDBBtn className="styleBtn2" style={{ marginTop: "5rem" }}>
          <MDBIcon icon="undo" style={{ marginRight: "1rem" }} />
          Reset Password
        </MDBBtn>
      );
    }
  }
}

export default Buttons;
