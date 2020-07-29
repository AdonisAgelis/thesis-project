import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBAnimation,
} from "mdbreact";
import "./profile.css";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import ColumnsProfile from "./columnsProfile.component";

class Profile extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );

    const columnPos = 2;

    return (
      <div id="profile">
        <Navbar />

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <ColumnsProfile columnPos={columnPos} />
            <ColumnsProfile columnPos={columnPos + 5} />
            <ColumnsProfile columnPos={columnPos + 1} />
          </MDBMask>
        </MDBView>
        <Footer />
      </div>
    );
  }
}

export default Profile;
