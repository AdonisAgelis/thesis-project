import React, { useState, useEffect } from "react";
import UserService from '../services/user.service';
import { Redirect } from 'react-router-dom';
import { MDBMask, MDBView } from "mdbreact";
import "../styles/workstation.css";
import WorkStationMenu from "./workStationMenu.component";
import { useSelector } from "react-redux";

const WorkStation = () => {
  const midMenuisOpen = useSelector((state) => state.dropMidColumnReducer);

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const columnPos = 2;

  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getUserWorkstation().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  });

  return (
    <div id="workstation">
      {isLoggedIn ? null : null} {/*Change it later*/}
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          {midMenuisOpen !== "2" ? (
            <WorkStationMenu columnPos={columnPos} />
          ) : (
              true
            )}
          {midMenuisOpen === "2" ? (
            <WorkStationMenu columnPos={columnPos} />
          ) : (
              true
            )}
          {midMenuisOpen === "2" ? (
            <WorkStationMenu columnPos={columnPos + 5} />
          ) : (
              true
            )}
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default WorkStation;
