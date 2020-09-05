import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBTypography,
  MDBBadge,
} from "mdbreact";

import "../styles/profile.css";
import Room from "./room.component";
import Buttons from "./buttons.component";
import TutorialModal from "./tutorialModal.component";
import logo from "../images/logo.png";
import DnDIcons from "./dndIcons.component";
import { useSelector, useDispatch } from "react-redux";

const ColumnsProfile = (props) => {
  const [columnProp, setColumnProp] = useState(props);

  let animationType;
  let animationDelay;

  //SELECTORS

  let entranceNumberBadge = useSelector(
    (state) => state.extractPositionReducer.entranceBadge
  );
  let exitNumberBadge = useSelector(
    (state) => state.extractPositionReducer.exitBadge
  );
  let accessPointNumberBadge = useSelector(
    (state) => state.extractPositionReducer.accessPointBadge
  );
  let exhibitNumberBadge = useSelector(
    (state) => state.extractPositionReducer.exhibitBadge
  );

  let midMenuisOpen = useSelector((state) => state.dropMidColumnReducer);

  if (midMenuisOpen !== "2") {
    animationType = "fadeInDown";
    animationDelay = ".3s";
  } else {
    animationType = "fadeInRight";
    animationDelay = ".0s";
  }
  // DISPATCH

  const dispatch = useDispatch();

  if (columnProp.columnPos === 2) {
    return (
      <MDBCol md={columnProp.columnPos}>
        <MDBAnimation type={animationType} delay={animationDelay}>
          <MDBCard style={{ opacity: "0.8" }}>
            <MDBCardTitle
              style={{
                display: "grid",
                placeItems: "center",
                textAlign: "center",
                marginTop: "4rem",
                color: "white",
                marginBottom: "4rem",
              }}
            >
              <a href="http://localhost:3000">
                <img
                  src={logo}
                  style={{ height: "3rem", marginLeft: "2rem" }}
                  className="img-fluid"
                />
              </a>
            </MDBCardTitle>
            <hr
              className="hr-light"
              style={{ width: "90%", marginLeft: "5%" }}
            />

            <Buttons type="home" />
            <Buttons type="new" />
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
          <MDBAnimation type="fadeInDown" delay=".3s">
            <MDBCard style={{ background: "rgba(0, 0, 0, 0.8" }}>
              <MDBCardImage className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <MDBTypography
                    style={{ color: "white" }}
                    tag="h4"
                  ></MDBTypography>
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}></MDBCardText>
                <div className="workspace-container">
                  <div id="item1">
                    <Room />
                  </div>
                  <div id="item2">
                    <TutorialModal />
                    <Buttons type="undo" />
                    <hr
                      className="hr-light"
                      style={{ width: "100%", marginLeft: "10px" }}
                    />
                    <div className="dragNdrop">
                      <DnDIcons role="entrance" />
                      <p>
                        ENTRANCE{" "}
                        <MDBBadge color="danger" className="ml-2">
                          {entranceNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="exit" />
                      <p>
                        EXIT{" "}
                        <MDBBadge color="danger" className="ml-2">
                          {exitNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="accessPoint" />
                      <p>
                        WIFI AP
                        <MDBBadge className="ml-2" color="danger">
                          {accessPointNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="exhibit" />
                      <p>
                        EXHIBIT{" "}
                        <MDBBadge color="danger" className="ml-2">
                          {exhibitNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DnDIcons role="wall" />
                      <p>WALL</p>
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex flex-row justify-content-between"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <hr className="hr-light" style={{ width: "100%" }} />

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
