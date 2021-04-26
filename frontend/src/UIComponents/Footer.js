import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBIcon, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter
      color="black"
      className="font-small pt-1 mt-1"
      style={{ marginRight: '3.5rem' }}>
      <div className="text-center py-3">
        <MDBContainer fluid style={{ marginTop: '1rem' }}>
          <span className="footerIcons">
            <MDBIcon size="2x" fab icon="facebook-square" />
          </span>
          <span className="footerIcons">
            <MDBIcon size="2x" fab icon="instagram" />
          </span>
          <span className="footerIcons">
            <MDBIcon size="2x" fab icon="github-square" />
          </span>
          <span className="footerIcons">
            <MDBIcon size="2x" fab icon="linkedin" />
          </span>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href="https://www.mdbootstrap.com">
            {' '}
            SweetFruits <span>🍒</span>
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
