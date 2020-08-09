import React, { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBTypography,
  MDBIcon,
  MDBBadge,
} from "mdbreact";

import "./profile.css";
import Room from "./room.component";
import Background from "./columnsback.jpg";
import Buttons from "./buttons.component";
import logo from "./logo.png";
import DnDIcons from "./dndIcons.component";

const ColumnsProfile = (props) => {
  const [columnProp, setColumnProp] = useState(props);

  const sendColumnMidIsOpen = (childData) => {
    columnProp.parentCallback(childData);
  };

  if (columnProp.columnPos === 2) {
    return (
      <MDBCol md={columnProp.columnPos}>
        <MDBAnimation type="fadeInDown" delay=".3s">
          <MDBCard style={{ opacity: "0.9" }}>
            <MDBCardTitle
              style={{
                display: "grid",
                placeItems: "center",
                textAlign: "center",
                marginTop: "4rem",
                color: "white",
                marginBottom: "5rem",
              }}
            >
              <a href="http://localhost:3000">
                <img src={logo} className="img-fluid" />
              </a>
            </MDBCardTitle>
            <hr
              className="hr-light"
              style={{ width: "90%", marginLeft: "5%" }}
            />

            <Buttons type="home" />

            <Buttons type="new" func={sendColumnMidIsOpen} />
            <Buttons type="load" />
            <Buttons type="graph" />
            <hr
              className="hr-light"
              style={{ width: "90%", marginLeft: "5%" }}
            />
            <Buttons type="reset" />
            <Buttons type="logout" />
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    );
  } else if (columnProp.columnPos === 7) {
    return (
      <DndProvider backend={HTML5Backend}>
        <MDBCol md={columnProp.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".4s">
            <MDBCard style={{ background: "rgba(0, 0, 0, 0.9" }}>
              <MDBCardImage className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <MDBTypography style={{ color: "white" }} tag="h4">
                    {/* Name of Room */}
                </MDBTypography>
                </MDBCardTitle>
                <hr style={{ width: "90%", marginLeft: "5%" }} />
                <MDBCardText style={{ textAlign: "center" }}></MDBCardText>
                <div className="workspace-container">
                  <div id="item1">
                    <Room />
                  </div>
                  <div id="item2">
                    <div className="dragNdrop">
                      <DnDIcons role="entrance" /><p>ENTRANCE</p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="exit" /><p>EXIT</p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="accessPoint" /><p>ACCESS POINT</p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="exhibit" /><p>EXHIBIT</p>
                    </div>
                  </div>
                </div>

                <hr style={{ width: "90%", marginLeft: "5%" }} />
                <div
                  className="d-flex flex-row justify-content-between"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <Buttons type={"save"} />
                  <Buttons type={"group"} />
                  <Buttons type={"add"} />
                  <Buttons type={"run"} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </DndProvider>
    );
  }
};

export default ColumnsProfile;
