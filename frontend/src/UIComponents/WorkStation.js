import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MDBMask, MDBView } from 'mdbreact';
import '../styles/workstation.css';
import WorkStationMenu from './WorkstationMenu';
import { useSelector, useDispatch } from 'react-redux';

const WorkStation = () => {
  const typeOfMenu = useSelector(state => state.dropMidColumnReducer);
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  const columnPos = 2;

  // useEffect(() => {
  //   const userInLocalStorage = JSON.parse(window.localStorage.getItem('user'));
  //   // dispatch(sendLocalStorageUserId(userInLocalStorage));
  //   // getUserWorkstation(userInLocalStorage);
  // });

  const revealMenus = () => {
    if (typeOfMenu === 'default') {
      return (
        <div id="workstation">
          {isLoggedIn ? (
            <Redirect to="/workstation" />
          ) : (
            <Redirect to="/login" />
          )}{' '}
          {/*Change it later*/}
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <WorkStationMenu columnPos={columnPos} />
            </MDBMask>
          </MDBView>
        </div>
      );
    } else if (typeOfMenu === 'new' || typeOfMenu === 'load') {
      return (
        <div id="workstation">
          {isLoggedIn ? (
            <Redirect to="/workstation" />
          ) : (
            <Redirect to="/login" />
          )}{' '}
          {/*Change it later*/}
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <WorkStationMenu columnPos={columnPos} />
              <WorkStationMenu columnPos={columnPos + 5} />
            </MDBMask>
          </MDBView>
        </div>
      );
    }
  };

  return <div id="workstation">{revealMenus()}</div>;
};

export default WorkStation;
