import React, { useState } from "react";
import { MDBMask, MDBView } from "mdbreact";
import "../styles/profile.css";
import ColumnsProfile from "./columnsProfile.component";
import { dropSecondColumn } from "../actions";
import { useSelector } from "react-redux";

const Profile = () => {
  const midMenuisOpen = useSelector((state) => state.dropMidColumnReducer);

  const columnPos = 2;

  return (
    <div id="profile">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <ColumnsProfile columnPos={columnPos} />
          {midMenuisOpen === "2" ? (
            <ColumnsProfile columnPos={columnPos + 5} />
          ) : (
            true
          )}
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default Profile;
