import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";

import "../styles/workstation.css";

const TutorialModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <MDBContainer>
      <MDBBtn
        className="styleBtn2"
        style={{
          display: "grid",
          gridTemplateColumns: "2rem auto",
          marginLeft: "9px",
          paddingLeft: "1rem",
          paddingRight: "3.7rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          textAlign: "center",
        }}
        color="white"
        onClick={toggle}
      >
        <MDBIcon
          icon="info-circle"
          style={{ marginRight: "6px", marginTop: "4.5px" }}
        />
        Tutorial
      </MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>A Quick Tutorial</MDBModalHeader>
        <MDBModalBody>
          Hello User! This is your workspace! You can drag and drop the items
          below and create your own template. There are some rules however. If
          you want to save your template it needs to have at least 1 Entrance, 1
          Exit, 1 WiFi Access Point and finally 1 Exhibit. Once you drag and
          drop these items the 'Save' button becomes available! If you are ready
          go ahead and save your progress, else keep dragging items until
          you create your desired template. There can only be 1 entrance and 1
          exit, but you can use 2 WiFi Access Points, up to 10 Exhibits and as
          many Wall blocks as you like! The black squares are the outer walls of
          the museum so only the Entrance and the Exit can be placed there! If
          you drop an item somewhere you did not want to, then click the 'Undo'
          button! This will disgard your latest drop action! Now you know
          everything you need to. So go ahead!
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn outline color="black" onClick={toggle}>
            Got it
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default TutorialModal;
