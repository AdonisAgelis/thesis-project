import React from "react";

import {
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNav,
} from "mdbreact";

import "./profile.css";
import Background from "./columnsback.jpg";
import Buttons from "./buttons.component";
import logo from "./logo.png";

class ColumnsProfile extends React.Component {
  sendColumnMidIsOpen = (childData) => {
    this.props.parentCallback(childData);
  };

  render() {
    if (this.props.columnPos === 2) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".3s">
            <MDBCard>
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
              <Buttons type="home" />
              <Buttons type="new" func={this.sendColumnMidIsOpen} />
              <Buttons type="load" />
              <Buttons type="graph" />
              <Buttons type="reset" />
              <Buttons type="logout" />
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    } else if (this.props.columnPos === 7) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".4s">
            <MDBCard>
              <MDBCardImage className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h4 style={{ color: "white" }}>Name of Room</h4>
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}></MDBCardText>
                <canvas id="myCanvas"></canvas>
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
    } else if (this.props.columnPos === 3) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".5s">
            <MDBCard>
              <MDBCardImage className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h4 style={{ color: "white", marginTop: "1rem" }}>
                    <MDBIcon icon="tools" style={{ marginRight: "1rem" }} />
                    Drag & Drop
                  </h4>
                </MDBCardTitle>
                <canvas id="myCanvas"></canvas>
                <MDBCardText style={{ textAlign: "center" }}></MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    }
  }
}

export default ColumnsProfile;
