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

class ColumnsProfile extends React.Component {
  sendData = () => {
    this.props.parentCallback("2");
  };

  render() {

    if (this.props.columnPos === 2) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".3s">
            <MDBCard
              style={{
                height: "40rem",
                borderRadius: "1rem",
                boxShadow: "20px 25px 10px rgba(24,24,24, .5)",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <MDBCardBody className="rounded mb-0">
                <MDBCardTitle
                  style={{
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "white",
                  }}
                >
                  <h4>
                    <MDBIcon
                      icon="user"
                      style={{
                        marginRight: "1rem",
                        marginBottom: "3rem",
                        marginTop: "2rem",
                      }}
                    />
                    Sensei
                  </h4>
                </MDBCardTitle>
                <hr
                  className="hrleft"
                  style={{ backgroundColor: "white" }}
                ></hr>
                <MDBCol>
                  <MDBNav className="flex-column   ">
                    <Buttons type = 'home' />
                    <Buttons type = 'new' onClick={this.sendData}/>
                    <Buttons type = 'load' />
                    <Buttons type = 'graph' />
                  </MDBNav>
                </MDBCol>
                <hr style={{ backgroundColor: "white" }}></hr>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    } else if (this.props.columnPos === 7) {
      return (
        <MDBCol md={this.props.columnPos}>
          <MDBAnimation type="fadeInDown" delay=".4s">
            <MDBCard
              style={{
                height: "40rem",
                borderRadius: "1rem",
                boxShadow: "20px 25px 10px rgba(24,24,24, .5)",
              }}
            >
              <MDBCardImage className="img-fluid" />
              <MDBCardBody
                style={{ backgroundColor: "121212" }}
                className="rounded mb-0"
              >
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h4 style={{ color: "white" }}>
                    <MDBIcon icon="building" style={{ marginRight: "1rem" }} />
                    Name of Room
                  </h4>
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  <hr className="hr" style={{ backgroundColor: "white" }}></hr>
                </MDBCardText>
                <canvas id="myCanvas"></canvas>
                <div className='d-flex flex-row justify-content-around' style={{display: 'flex', flexWrap: 'wrap'}}>
                  <Buttons type={'save'}/>
                  <Buttons type={'group'}/>
                  <Buttons type={'people'}/>
                  <Buttons type={'add'}/>
                  <Buttons type={'run'}/>
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
            <MDBCard
              style={{
                height: "40rem",
                borderRadius: "1rem",
                boxShadow: "20px 25px 10px rgba(24,24,24, .5)",
              }}
            >
              <MDBCardImage className="img-fluid" />
              <MDBCardBody
                style={{ backgroundColor: "121212" }}
                className="rounded mb-0"
              >
                <MDBCardTitle style={{ textAlign: "center" }}>
                  <h4 style={{ color: "white" }}>
                    <MDBIcon icon="tools" style={{ marginRight: "1rem" }} />
                    Drag & Drop
                  </h4>
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  <hr className="hr" style={{ backgroundColor: "white" }}></hr>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      );
    }
  }
}

export default ColumnsProfile;
