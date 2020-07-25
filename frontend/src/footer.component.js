import React from "react";

import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

class Footer extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow className="py-5 ">
          <MDBCol md="12" className="text-center ">
            <p>
              © 2020 . All Rights Reserved. Designed by Stamos Kantarakis and
              Adonis Agelis
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Footer;