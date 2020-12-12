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
  MDBInput,
} from "mdbreact";

import "../styles/workstation.css";
import { changeDimensions, sendNameOfTemplate } from "../actions/workstation";
import { sendRoomData } from "../actions/auth";

const Modal = (props) => {
  const [modalProps, setModalProps] = useState(props);
  const [modalResize, setModalResize] = useState(false);
  const [modalSave, setModalSave] = useState(false);
  const dispatch = useDispatch();

  let height = useSelector((state) => state.extractPositionReducer.height);
  let roomdData = useSelector((state) => state.extractPositionReducer);
  let width = useSelector((state) => state.extractPositionReducer.width);

  let nameOfTemplate = useSelector(
    (state) => state.extractPositionReducer.nameOfTemplate
  );

  const toggleSave = () => {
    setModalSave(!modalSave);
  };

  const saveButtonEvent = () => {
    const userInLocalStorage = JSON.parse(window.localStorage.getItem("user"));
    dispatch(sendNameOfTemplate(nameOfTemplate, userInLocalStorage.id));
    dispatch(sendRoomData(roomdData));
    toggleSave();
  };

  const toggleResize = () => {
    setModalResize(!modalResize);
  };

  const resizeButtonEvent = () => {
    dispatch(changeDimensions(height, width));
    toggleResize();
  };

  if (modalProps.type === "resize") {
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
          onClick={toggleResize}
        >
          <MDBIcon
            icon="expand-arrows-alt"
            style={{ marginRight: "6px", marginTop: "4.5px" }}
          />
          Dimensions
        </MDBBtn>
        <MDBModal
          isOpen={modalResize}
          toggle={toggleResize}
          keyboard="true"
          size="lg"
          position="right"
        >
          <MDBModalHeader
            style={{ paddingLeft: "18rem", color: "black" }}
            toggle={toggleResize}
          >
            <b> Change Dimensions</b>
          </MDBModalHeader>

          <MDBModalBody>
            <MDBInput
              className="black-text"
              iconClass="black-text"
              label="Insert Height (Max Height: 23 squares)"
              icon="arrows-alt-v"
              valueDefault={height}
              onChange={(e) => (height = parseInt(e.target.value, 10))}
            />
            <MDBInput
              className="black-text"
              iconClass="black-text"
              label="Insert Width (Max Width: 38 squares)"
              icon="arrows-alt-h"
              valueDefault={width}
              onChange={(e) => (width = parseInt(e.target.value, 10))}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              style={{ borderRadius: "4px" }}
              outline
              color="black"
              onClick={() => resizeButtonEvent()}
            >
              Resize
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (modalProps.type === "save") {
    return (
      <MDBContainer
        style={{
          flexBasis: "1px",
          paddingRight: " 1px",
          paddingLeft: " 1px",
          marginRight: " 1px",
          marginLeft: " 1px",
          height: "50%",
        }}
      >
        <MDBBtn
          id="save"
          style={{
            display: "grid",
            gridTemplateColumns: "2rem auto",
            marginLeft: "6px",
            paddingLeft: "1.5rem",
          }}
          onClick={toggleSave}
        >
          <MDBIcon
            icon="save"
            style={{ marginRight: "2px", marginTop: "3px" }}
          />
          Save
        </MDBBtn>
        <MDBModal
          isOpen={modalSave}
          toggle={toggleSave}
          keyboard="true"
          size="lg"
          position="bottom"
        >
          <MDBModalHeader
            style={{ paddingLeft: "18rem", color: "black" }}
            toggle={toggleSave}
          >
            <b>Name your Template</b>
          </MDBModalHeader>

          <MDBModalBody>
            <MDBInput
              className="black-text"
              iconClass="black-text"
              label="Insert Name of Room"
              icon="arrows-alt-v"
              valueDefault={nameOfTemplate}
              onChange={(e) => (nameOfTemplate = e.target.value)}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              style={{ borderRadius: "4px" }}
              outline
              color="black"
              onClick={() => saveButtonEvent()}
            >
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
};

export default Modal;
