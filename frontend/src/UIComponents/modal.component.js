import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBInput
} from "mdbreact";

import "../styles/workstation.css";
import { changeDimensions } from "../actions";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    dispatch(changeDimensions(height, width))
  };

  let height = useSelector(
    (state) => state.extractPositionReducer.height
  );

  let width = useSelector(
    (state) => state.extractPositionReducer.width
  );

  const dispatch = useDispatch();

  return (
    <MDBContainer>
      <MDBBtn
        className="styleBtn2"
        style={{
          display: "grid",
          gridTemplateColumns: "2rem auto",
          marginLeft: "9px",
          paddingLeft: "1rem",
          paddingRight: "2.6rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "center",
        }}
        color="white"
        onClick={toggle}
      >
        <MDBIcon
          icon="expand-arrows-alt"
          style={{ marginRight: "6px", marginTop: "4.5px" }}
        />
        Dimensions
      </MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle} keyboard='true' size='lg' position="right">
        <MDBModalHeader toggle={toggle}>Change Dimensions</MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            className="black-text"
            iconClass="black-text"
            label="Insert Height (Max Height: 23 squares)"
            icon="arrows-alt-v"
            valueDefault={height}
          />
          <MDBInput
            className="black-text"
            iconClass="black-text"
            label="Insert Width (Max Width: 38 squares)"
            icon="arrows-alt-h"
            valueDefault={width}
          />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline color="black" onClick={toggle}>
            Resize
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default Modal;
