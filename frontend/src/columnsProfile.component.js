import React, { useState } from "react";

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
} from "mdbreact";

import "./profile.css";
import Room from "./room.component";
import Background from "./columnsback.jpg";
import Buttons from "./buttons.component";
import logo from "./logo.png";

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
      <MDBCol md={columnProp.columnPos}>
        <MDBAnimation type="fadeInDown" delay=".4s">
          <MDBCard style={{ background: "rgba(0, 0, 0, 0.9" }}>
            <MDBCardImage className="img-fluid" />
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: "center" }}>
                <MDBTypography style={{ color: "white" }} tag="h4">
                  Name of Room
                </MDBTypography>
              </MDBCardTitle>
              <hr style={{ width: "90%", marginLeft: "5%" }} />
              <MDBCardText style={{ textAlign: "center" }}></MDBCardText>

              <div id="item1">
                <Room itemPosition={[0, 0]} />
              </div>
              <div id="item2"></div>

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
    );
  }
};

export default ColumnsProfile;
