import React, { useState } from "react";

import {
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
} from "mdbreact";

import "./profile.css";
import Background from "./columnsback.jpg";
import Buttons from "./buttons.component";
import logo from "./logo.png";

const ColumnsProfile = props => {

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

                {/* <h4>
                    <MDBIcon
                      icon="user"
                      style={{
                        marginRight: "1rem",
                        marginBottom: "3rem",
                        marginTop: "2rem",
                      }}
                    />
                    Sensei
                  </h4> */}
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
                  <h5 style={{ color: "white" }}>Name of Room</h5>
                </MDBCardTitle>
                <hr
                  className="hr-light"
                  style={{ width: "90%", marginLeft: "5%" }}
                />

                <MDBCardText style={{ textAlign: "center" }}></MDBCardText>

                <canvas id="myCanvas"></canvas>
                <hr
                  className="hr-light"
                  style={{ width: "90%", marginLeft: "5%" }}
                />
                <div
                  className="d-flex flex-row justify-content-around"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <Buttons type={"save"} />
                  <Buttons type={"group"} />
                  {/* <Buttons type={"people"} /> */}
                  <Buttons type={"add"} />

                  <Buttons type={"run"} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    } else if (columnProp.columnPos === 3) {
      return (
        <MDBCol md={columnProp.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".5s">
            <MDBCard style={{ background: "rgba(0, 0, 0, 0.9" }}>
              <MDBCardImage className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h5 style={{ color: "white", marginTop: "1rem" }}>
                    <MDBIcon icon="tools" style={{ marginRight: "1rem" }} />
                    Drag & Drop
                  </h5>
                  <hr
                    className="hr-light"
                    style={{ width: "90%", marginLeft: "5%" }}
                  />
                </MDBCardTitle>
                <canvas id="myCanvas"></canvas>
                <hr
                  className="hr-light"
                  style={{ width: "90%", marginLeft: "5%" }}
                />
                <MDBCardText style={{ textAlign: "center" }}></MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    }
}

export default ColumnsProfile;
