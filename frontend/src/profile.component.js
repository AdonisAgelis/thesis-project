import React, { useState } from "react";
import { MDBMask, MDBView } from "mdbreact";
import "./profile.css";
import ColumnsProfile from "./columnsProfile.component";

const Profile = () => {

  const [midMenuisOpen, setMidMenuisOpen] = useState('1');

  const callbackFunction = (childData) => {
    setMidMenuisOpen(childData);
  };

    const columnPos = 2;

    return (
      <div id="profile">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <ColumnsProfile
              columnPos={columnPos}
              parentCallback={callbackFunction}
            />
            {midMenuisOpen === "2" ? (
              <ColumnsProfile columnPos={columnPos + 5} />
            ) : (
              true
            )}
            {midMenuisOpen === "2" ? (
              <ColumnsProfile columnPos={columnPos + 1} />
            ) : (
              true
            )}
            {midMenuisOpen === "3" ? (
              <ColumnsProfile columnPos={columnPos + 5} />
            ) : (
              true
            )}
          </MDBMask>
        </MDBView>
      </div>
    );
}

export default Profile;
