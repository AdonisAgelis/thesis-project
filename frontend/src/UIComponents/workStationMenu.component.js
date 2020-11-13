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
  MDBIcon,
} from "mdbreact";

import "../styles/workstation.css";
import RoomTemplate from "./roomTemplate.component";
import Buttons from "./buttons.component";
import Modal from "./modal.component";
import logo from "../images/logo.png";
import DragAndDropItems from "./dragAndDropItems.component";
import { useSelector, useDispatch } from "react-redux";

const WorkStationMenu = (props) => {
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

  if (midMenuisOpen === "default") {
    animationType = "fadeInDown";
    animationDelay = ".3s";
  } else if (midMenuisOpen === "new") {
    animationType = "fadeInRight";
    animationDelay = ".0s";
  }
  // DISPATCH
  const dispatch = useDispatch();

  if (
    (midMenuisOpen === "default" ||
      midMenuisOpen === "load" ||
      midMenuisOpen === "new") &&
    columnProp.columnPos == 2
  ) {
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
              <a href="http://localhost:8081">
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
  } else if (midMenuisOpen === "new" && columnProp.columnPos == 7) {
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
                    <RoomTemplate />
                  </div>
                  <div id="item2">
                    <Modal />
                    <Buttons type="undo" />
                    <hr
                      className="hr-light"
                      style={{ width: "100%", marginLeft: "10px" }}
                    />
                    <div className="dragNdrop">
                      <DragAndDropItems role="entrance" />
                      <p>
                        ENTRANCE{" "}
                        <MDBBadge color="danger" className="ml-2">
                          {entranceNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DragAndDropItems role="exit" />
                      <p>
                        EXIT{" "}
                        <MDBBadge color="danger" className="ml-2">
                          {exitNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DragAndDropItems role="accessPoint" />
                      <p>
                        WIFI AP
                        <MDBBadge className="ml-2" color="danger">
                          {accessPointNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DragAndDropItems role="exhibit" />
                      <p>
                        EXHIBIT{" "}
                        <MDBBadge color="danger" className="ml-2">
                          {exhibitNumberBadge}
                        </MDBBadge>
                      </p>
                    </div>
                    <div className="dragNdrop">
                      <DragAndDropItems role="wall" />
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
  } else if (midMenuisOpen === "load" && columnProp.columnPos == 7) {
    return (
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
              <div className="workspace-container"></div>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    );
  }
};

export default WorkStationMenu;
