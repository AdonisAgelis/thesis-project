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
      const url = window.location.href;

      if (url === "http://localhost:3000/login") {
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
      } else if (url === "http://localhost:3000/info") {
        return (
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/signup">Sign Up</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Log In</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink Link to="/info">
                Info
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        );
      } else if (url === "http://localhost:3000/signup") {
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
      } else if (url === "http://localhost:3000/profile") {
        return (
          <MDBNavbarNav right>
            <MDBNavItem
              style={{ paddingRight: "2px", paddingTop: "9px", color: "white" }}
            >
              Hey <i>User</i> !
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Log Out</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/signup" style={{ textDecoration: "underline" }}>
                Forgot Password?
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        );
      } else {
        return (
          <MDBNavbarNav right>
            <MDBNavItem>
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
              <a href="http://localhost:3000/">
                <img src={logo} className="img-fluid" />
              </a>
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
