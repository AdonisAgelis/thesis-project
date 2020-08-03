import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBMask, MDBCard, MDBView, MDBCardBody } from "mdbreact";
import "./profile.css";
import Navbar from "./navbar.component";
import Footer from "./footer.component";
import ColumnsProfile from "./columnsProfile.component";

class Profile extends React.Component {
  state = { midMenuisOpen: "1" };

  callbackFunction = (childData) => {
    this.setState({ midMenuisOpen: childData });
  };

  render() {
    const columnPos = 2;

    return (
      <div id="profile">
        {/* <Navbar /> */}
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <ColumnsProfile
              columnPos={columnPos}
              parentCallback={this.callbackFunction}
            />
            {this.state.midMenuisOpen === "2" ? (
              <ColumnsProfile columnPos={columnPos + 5} />
            ) : (
              true
            )}
            {this.state.midMenuisOpen === "2" ? (
              <ColumnsProfile columnPos={columnPos + 1} />
            ) : (
              true
            )}
            {this.state.midMenuisOpen === "3" ? (
              <ColumnsProfile columnPos={columnPos + 5} />
            ) : (
              true
            )}
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Profile;
