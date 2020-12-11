import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { Redirect } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";
import "../styles/workstation.css";
import WorkStationMenu from "./workStationMenu.component";
import { useSelector, useDispatch } from "react-redux";
import { sendLocalStorageUserId } from "../actions/auth";

const WorkStation = () => {
  const [content, setContent] = useState("");
  const midMenuisOpen = useSelector((state) => state.dropMidColumnReducer);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();
  const columnPos = 2;

  const createPages = () => {
    if (midMenuisOpen === "default") {
      return (
        <div id="workstation">
          {isLoggedIn ? null : null} {/*Change it later*/}
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <WorkStationMenu columnPos={columnPos} />
            </MDBMask>
          </MDBView>
        </div>
      );
    } else if (midMenuisOpen === "new" || midMenuisOpen === "load") {
      return (
        <div id="workstation">
          {isLoggedIn ? null : null} {/*Change it later*/}
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

  return <div id="workstation">{createPages()}</div>;
};

export default WorkStation;
