import React, { Component } from "react";
import {
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
} from "mdbreact";

class ModalPage extends React.Component {
  state = {
    modal10: false,
    modal11: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn
          className="styleBtn"
          onClick={this.toggle(10)}
          style={{ textAlign: "center" }}
        >
          <MDBIcon icon="info-circle" style={{ marginRight: "1rem" }} />
          Information
        </MDBBtn>

        <MDBModal
          style={{ opacity: "1" }}
          isOpen={this.state.modal10}
          toggle={this.toggle(10)}
          frame
          position="bottom"
          opacity="0"
        >
          <MDBModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <MDBBtn color="secondary" onClick={this.toggle(10)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
