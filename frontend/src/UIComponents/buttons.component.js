import React, { useState } from "react";

import {
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

import "../styles/profile.css";

const Buttons = props => {

  const [buttonProp, setButtonProp] = useState(props);

  const [typeOfPeople, setTypeOfPeople] = useState(3);
  const [numOfPeople, setNumOfPeople] = useState('NUMBER OF PEOPLE');    

  const handleDropDown = async (index) => {
    if (index !== typeOfPeople) {
      await setTypeOfPeople(index);
      await setNumOfPeople('NUMBER OF PEOPLE');
    }
  };

  const handleSecondDropDown = async (testing) => {
    await setNumOfPeople(testing);
  };

  const groupDropDownOptions = (x, y) => {
    const array = y[x].num.map((value) => (
      <MDBDropdownItem onClick={() => handleSecondDropDown(value)}>
        {value}
      </MDBDropdownItem>
    ));
    return <MDBDropdownMenu basic>{array}</MDBDropdownMenu>;
  };

  const dropdownItems = [
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

  const sendColumnMidIsOpen = () => {
    buttonProp.func("2");
  };

    if (buttonProp.type === "save") {
      return (
        <MDBBtn id="save" rounded color="success">
          <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
          Save
        </MDBBtn>
      );
    } else if (buttonProp.type === "group") {
      return (
        <div className="d-flex flex-row justify-content-around">
          <MDBDropdown>
            <MDBDropdownToggle id="dd1" caret rounded color="blue-grey">
              {dropdownItems[typeOfPeople].type}
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem onClick={() => handleDropDown(0)}>
                {dropdownItems[0].type}
              </MDBDropdownItem>
              <MDBDropdownItem onClick={() => handleDropDown(1)}>
                {dropdownItems[1].type}
              </MDBDropdownItem>
              <MDBDropdownItem onClick={() => handleDropDown(2)}>
                {dropdownItems[2].type}
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown>
            <MDBDropdownToggle caret id="dd2" rounded color="blue-grey">
              {numOfPeople}
            </MDBDropdownToggle>
            {groupDropDownOptions(
              typeOfPeople,
              dropdownItems
            )}
          </MDBDropdown>
        </div>
      );
    } else if (buttonProp.type === "add") {
      return (
        <MDBBtn id="add" color="blue-grey">
          <MDBIcon icon="arrow-alt-circle-up" /> Add
        </MDBBtn>
      );
    } else if (buttonProp.type === "run") {
      return (
        <MDBBtn id="run" rounded color="danger">
          <MDBIcon icon="tachometer-alt" style={{ marginRight: "1rem" }} />
          Run Simulation
        </MDBBtn>
      );
    } else if (buttonProp.type === "home") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
          Home
        </MDBBtn>
      );
    } else if (buttonProp.type === "new") {
      return (
        <MDBBtn className="styleBtn" onClick={sendColumnMidIsOpen}>
          <MDBIcon icon="plus-circle" style={{ marginRight: "1rem" }} />
          New Template
        </MDBBtn>
      );
    } else if (buttonProp.type === "load") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="sync" style={{ marginRight: "1rem" }} />
          Load Template
        </MDBBtn>
      );
    } else if (buttonProp.type === "graph") {
      return (
        <MDBBtn className="styleBtn">
          <MDBIcon icon="chart-area" style={{ marginRight: "1rem" }} />
          Graphs
        </MDBBtn>
      );
    } else if (buttonProp.type === "logout") {
      return (
        <MDBBtn className="styleBtn2">
          <MDBIcon icon="sign-out-alt" style={{ marginRight: "1rem" }} />
          Log Out
        </MDBBtn>
      );
    } else if (buttonProp.type === "reset") {
      return (
        <MDBBtn className="styleBtn2" style={{ marginTop: "5rem" }}>
          <MDBIcon icon="undo" style={{ marginRight: "1rem" }} />
          Reset Password
        </MDBBtn>
      );
    }
}

export default Buttons;
