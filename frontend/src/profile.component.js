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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
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
                      <img id='avatar' className='rounded-circle' src='https://wireless.uop.gr/images/instructors/Dr-Tselikas.jpg'></img>
                      <MDBCardTitle style={{display: 'grid', placeItems: 'center', marginTop: '1rem', color: 'white'}}>Sensei</MDBCardTitle>
                      <hr className='hr' style={{backgroundColor: 'white'}}></hr>
                      {/* <MDBCardText style={{textAlign: 'center'}}>
                          
                      </MDBCardText> */}
                      <div className='profBtn'>
                        <MDBBtn className='styleBtn hw' gradient>New Template</MDBBtn>
                        <MDBDropdown>
                          <MDBDropdownToggle caret className='styleBtn hw'>
                            Load Template
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem>Template 1</MDBDropdownItem>
                            <MDBDropdownItem>Template 2</MDBDropdownItem>
                            <MDBDropdownItem>Template 3</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </div>
                      <div className='profBtn'>
                        <MDBBtn id='runBtn' className='styleBtn' gradient>Run Simulation</MDBBtn>
                      </div>
                      <hr className='hr' style={{backgroundColor: 'white'}}></hr>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="8">
                <MDBCard style={{
                    height: '40rem'
                  }}>
                    <MDBCardImage className="img-fluid"/>
                    <MDBCardBody  className='rounded mb-0 gradient'>
                      <MDBCardTitle style={{display: 'grid', placeItems: 'center', marginTop: '1rem', color: 'white'}}>Create Template</MDBCardTitle>
                      <hr style={{backgroundColor: 'white', marginTop: '2rem'}}></hr>
                      <canvas id="myMainCanvas" height="110"></canvas>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="2">
                <MDBCard style={{
                    height: '40rem'
                  }}>
                    <MDBCardImage className="img-fluid"/>
                    <MDBCardBody  className='rounded mb-0 gradient'>
                      <MDBCardTitle style={{display: 'grid', placeItems: 'center', marginTop: '1rem', color: 'white'}}>Drag & Drop Items</MDBCardTitle>
                      <hr id='dnd' className='hr' style={{backgroundColor: 'white'}}></hr>
                      <canvas id="myItemCanvas" height="535vh"></canvas>
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
