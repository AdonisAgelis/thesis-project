import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";
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
        <Navbar />

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <ColumnsProfile
              columnPos={columnPos}
              parentCallback={this.callbackFunction}
            />
            {this.state.midMenuisOpen === "1" ? (
              true
            ) : (
              <ColumnsProfile columnPos={columnPos + 5} />
            )}
            {this.state.midMenuisOpen === "1" ? (
              true
            ) : (
              <ColumnsProfile columnPos={columnPos + 1} />
            )}

            {/* <ColumnsProfile columnPos={columnPos + 5} />
            <ColumnsProfile columnPos={columnPos + 1} /> */}
          </MDBMask>
        </MDBView>
        <Footer />
      </div>
    );
  }
}

export default Profile;
