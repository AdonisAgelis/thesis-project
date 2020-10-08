import React, { useState } from "react";
import { MDBMask, MDBView, MDBAnimation } from "mdbreact";
import "../styles/workstation.css";
import WorkStationMenu from "./workStationMenu.component";
import { useSelector } from "react-redux";

const WorkStation = () => {
  const midMenuisOpen = useSelector((state) => state.dropMidColumnReducer);

  const columnPos = 2;

  return (
    <div id="workstation">
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
