import React from "react";

import { MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBContainer
      className="container-fluid"
      style={{ backgroundColor: "transparent" }}
    >
      <MDBRow className="py-4">
        <MDBCol xl="12" className="text-center">
          <p style={{ margin: "auto" }}>
            © 2020 . All Rights Reserved. Designed by Stamos Kantarakis
            (Mr.Cockbig-19) and Adonios Agelios IV
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Footer;
