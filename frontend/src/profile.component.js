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
    return (
      <div id="profile">
        <Navbar />

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <Navbar />
                <MDBCol md="2">
                {/* <MDBContainer className='gradient'> */}
                  <MDBCard style={{
                    height: '40rem'
                  }}>
                    {/* <MDBCardImage style={{height: '5rem'}}/> */}
                    <MDBCardBody  className='rounded mb-0 gradient'>
                      <img id='avatar' className='rounded-circle' src='https://legacyprojectchicago.org/sites/default/files/2019-09/Alexander%20the%20Great.jpeg'></img>
                      <MDBCardTitle style={{display: 'grid', placeItems: 'center', marginTop: '1rem', color: 'white'}}>Γιώργης</MDBCardTitle>
                      <hr style={{backgroundColor: 'white'}}></hr>
                      {/* <MDBCardText style={{textAlign: 'center'}}>
                          El Bouti8o
                      </MDBCardText> */}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="8">
                <MDBCard style={{
                    height: '40rem'
                  }}>
                    <MDBCardImage className="img-fluid"/>
                    <MDBCardBody style={{ backgroundColor: 'white'}} className='rounded mb-0'>
                      <MDBCardTitle style={{ textAlign: 'center'}}>DimitraPap</MDBCardTitle>
                      <MDBCardText style={{textAlign: 'center'}}>
                          El Bouti8o
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="2">
                <MDBCard style={{
                    height: '40rem'
                  }}>
                    <MDBCardImage className="img-fluid"/>
                    <MDBCardBody style={{ backgroundColor: 'white'}} className='rounded mb-0'>
                      <MDBCardTitle style={{ textAlign: 'center'}}>DimitraPap</MDBCardTitle>
                      <MDBCardText style={{textAlign: 'center'}}>
                          El Bouti8o
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
            {/* </MDBContainer> */}
          </MDBMask>
        </MDBView>
        <Footer />
      </div>
    );
  }
}

export default Profile;
