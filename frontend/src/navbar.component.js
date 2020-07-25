import React from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";

import logo from "./logo.png";


class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const activeNavBtn = () => {
      const w = window.location.href;
      if (w === "http://localhost:3000/signup") {
        return (
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/signup">Sign Up</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Log In</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink Link to="/info">
                Info
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        );
      } else if (w === "http://localhost:3000/login") {
        return (
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/signup">Sign Up</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="/login">Log In</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink Link to="/info">
                Info
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        );
      } else if (w === "http://localhost:3000/info") {
        return (
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/signup">Sign Up</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Log In</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink Link to="/info">Info</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        );
      }
    };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div>
        <MDBNavbar
          color="black"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <img src={logo} alt="" className="img-fluid" />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              {activeNavBtn()}
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapsed && overlay}
      </div>
    );
  }
}

export default Navbar;