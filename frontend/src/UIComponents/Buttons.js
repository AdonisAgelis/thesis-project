import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

import '../styles/workstation.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout, sendSimulationData } from '../actions/auth';
import {
  dropSecondColumn,
  dropSecondColumnLoad,
  updateFirstDropDown,
  updateSecondDropDown,
  enableDropDownOptions,
  undoAfterClicking,
  resetRoom,
  resetTypeOfDraggable,
  enableSimulationButton,
  sendAddAttributes,
  roomIsLoaded,
  dropSecondColumnLoadSim,
} from '../actions/workstation';

const Buttons = props => {
  const [buttonProp, setButtonProp] = useState(props);

  const dispatch = useDispatch();
  const history = useHistory();

  // Selectors for Button Enabling

  const roomLoaded = useSelector(state => state.buttonEnablingReducer.isLoaded);

  const peopleType = useSelector(state => state.dropdownSelectionsReducer);

  const peopleNum = useSelector(state => state.dropdownSecondSelectionsReducer);

  let enableSimButton = useSelector(
    state => state.buttonEnablingReducer.disabledSimBtn
  );

  let saveBtnSent = useSelector(state => state.buttonEnablingReducer.saveBtn);

  // Selectors for Simulation Data

  let typeOfGroup = useSelector(
    state => state.sendAttributesReducer.typeOfGroup
  );

  let numberOfPeopleInGroup = useSelector(
    state => state.sendAttributesReducer.numberOfPeopleInGroup
  );

  let userID = useSelector(state => state.extractPositionReducer.userId);

  let nameOfTemplate = useSelector(
    state => state.extractPositionReducer.nameOfTemplate
  );

  let noSimSquares = useSelector(
    state => state.extractPositionReducer.noSimSquares
  );

  let leftSideWallArray = useSelector(
    state => state.extractPositionReducer.leftSideWallArray
  );
  let rightSideWallArray = useSelector(
    state => state.extractPositionReducer.rightSideWallArray
  );
  let topSideWallArray = useSelector(
    state => state.extractPositionReducer.topSideWallArray
  );
  let botSideWallArray = useSelector(
    state => state.extractPositionReducer.botSideWallArray
  );

  const routeChange = () => {
    let path = '';
    history.push(path);
  };

  const logOut = () => {
    dispatch(logout());
    console.log('Logged out!');
  };

  const handleDropDown = index => {
    if (index !== peopleType) {
      dispatch(updateFirstDropDown(index));
      dispatch(updateSecondDropDown('NUMBER OF PEOPLE'));
    }
  };

  const handleSecondDropDown = testing => {
    dispatch(updateSecondDropDown(testing));
  };

  const groupDropDownOptions = (x, y) => {
    const array = y[x].num.map(value => (
      <MDBDropdownItem onClick={() => handleSecondDropDown(value)}>
        {value}
      </MDBDropdownItem>
    ));
    return <MDBDropdownMenu basic>{array}</MDBDropdownMenu>;
  };

  const enableSimulation = () => {
    dispatch(enableSimulationButton());
    dispatch(sendAddAttributes(peopleType, peopleNum));
    alert('Added', peopleNum, peopleType);
  };

  const runSimulation = () => {
    dispatch(enableDropDownOptions());
    // edw tha steilume dedomena mesw async reducers bla bla bla sto backend
    dispatch(
      sendSimulationData(
        typeOfGroup,
        numberOfPeopleInGroup,
        userID,
        nameOfTemplate,
        noSimSquares,
        leftSideWallArray,
        rightSideWallArray,
        topSideWallArray,
        botSideWallArray
      )
    );
  };

  const handleNew = () => {
    dispatch(dropSecondColumn());
    dispatch(resetRoom());
    dispatch(resetTypeOfDraggable());
  };

  const handleLoad = () => {
    // dispatch(sendLocalStorageUserId(userInLocalStorage));
    dispatch(resetRoom());
    dispatch(resetTypeOfDraggable());
    dispatch(dropSecondColumnLoad());
  };

  const handleLoadSim = () => {
    // dispatch(sendLocalStorageUserIdToGraphs(userInLocalStorage));
    dispatch(dropSecondColumnLoadSim());
  };

  let enableAdd = peopleNum === 'NUMBER OF PEOPLE';

  if (roomLoaded) {
    saveBtnSent = false;
  }

  const dropdownItems = [
    {
      type: 'School',
      num: [5, 10, 15],
      isActive: 1,
    },
    {
      type: 'Family',
      num: [3, 4, 5, 6],
      isActive: 2,
    },
    {
      type: 'Other',
      num: [2, 3, 4],
      isActive: 3,
    },
    {
      type: 'Choose Group',
      num: ['Choose a group first!'],
      isActive: 4,
    },
  ];

  if (buttonProp.type === 'group') {
    return (
      <div className="d-flex flex-row justify-content-around">
        <MDBDropdown>
          <MDBDropdownToggle
            disabled={saveBtnSent}
            id="dd1"
            caret
            rounded
            color="blue-grey">
            {dropdownItems[peopleType].type}
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
          <MDBDropdownToggle
            disabled={saveBtnSent}
            caret
            id="dd2"
            rounded
            color="blue-grey">
            {peopleNum}
          </MDBDropdownToggle>
          {groupDropDownOptions(peopleType, dropdownItems)}
        </MDBDropdown>
      </div>
    );
  } else if (buttonProp.type === 'add') {
    return (
      <MDBBtn
        onClick={() => enableSimulation()}
        disabled={enableAdd}
        id="add"
        color="blue-grey">
        <MDBIcon icon="arrow-alt-circle-up" style={{ marginRight: '3px' }} />{' '}
        Add
      </MDBBtn>
    );
  } else if (buttonProp.type === 'run') {
    return (
      <MDBBtn
        onClick={() => runSimulation()}
        disabled={enableSimButton}
        id="run"
        rounded
        color="danger">
        <MDBIcon icon="tachometer-alt" style={{ marginRight: '9px' }} />
        Run Simulation
      </MDBBtn>
    );
  } else if (buttonProp.type === 'home') {
    return (
      <MDBBtn
        className="styleBtn"
        onClick={() => window.location.reload(false)}>
        <MDBIcon icon="home" style={{ marginRight: '1rem' }} />
        Home
      </MDBBtn>
    );
  } else if (buttonProp.type === 'new') {
    return (
      <MDBBtn
        className="styleBtn"
        onClick={() => {
          handleNew();
        }}>
        <MDBIcon icon="plus-circle" style={{ marginRight: '1rem' }} />
        New Template
      </MDBBtn>
    );
  } else if (buttonProp.type === 'load') {
    return (
      <MDBBtn
        className="styleBtn"
        onClick={() => {
          handleLoad();
          dispatch(roomIsLoaded());
        }}>
        <MDBIcon icon="sync" style={{ marginRight: '1rem' }} />
        Load Template
      </MDBBtn>
    );
  } else if (buttonProp.type === 'graph') {
    return (
      <MDBBtn className="styleBtn" onClick={() => handleLoadSim()}>
        <MDBIcon icon="chart-area" style={{ marginRight: '1rem' }} />
        Graphs
      </MDBBtn>
    );
  } else if (buttonProp.type === 'logout') {
    return (
      <MDBBtn
        onClick={() => {
          logOut();
          routeChange();
          // window.location.reload(false);
        }}
        className="styleBtn2">
        <span>
          <MDBIcon icon="sign-out-alt" style={{ marginRight: '1rem' }} />
          Log Out
        </span>
      </MDBBtn>
    );
  } else if (buttonProp.type === 'reset') {
    return (
      <MDBBtn className="styleBtn2" style={{ marginTop: '5rem' }}>
        <span>
          <MDBIcon icon="undo" style={{ marginRight: '1rem' }} />
          Reset Password
        </span>
      </MDBBtn>
    );
  } else if (buttonProp.type === 'undo') {
    return (
      <MDBBtn
        onClick={() => {
          dispatch(undoAfterClicking());
        }}
        className="styleBtn2"
        style={{
          display: 'grid',
          gridTemplateColumns: '2rem auto',
          marginLeft: '25px',
          paddingLeft: '1rem',
          paddingRight: '5.2rem',
          textAlign: 'center',
        }}>
        <MDBIcon
          icon="backspace"
          style={{ marginRight: '6px', marginTop: '4.5px' }}
        />
        Undo
      </MDBBtn>
    );
  }
};

export default Buttons;
