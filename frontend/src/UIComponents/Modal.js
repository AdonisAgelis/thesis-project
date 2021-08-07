import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBInput,
} from 'mdbreact';

import {
  changeDimensions,
  sendNameOfTemplate,
  sendSaveButtonState,
} from '../actions/workstation';
import { sendLocalStorageUserId, sendRoomData } from '../actions/auth';

import '../styles/workstation.css';

const Modal = props => {
  const [modalProps, setModalProps] = useState(props);
  const [modalResize, setModalResize] = useState(false);
  const [modalSave, setModalSave] = useState(false);
  const dispatch = useDispatch();

  let height = useSelector(state => state.extractPositionReducer.height);
  let roomData = useSelector(state => state.extractPositionReducer);
  let width = useSelector(state => state.extractPositionReducer.width);
  let saveBtn = useSelector(state => state.buttonEnablingReducer.saveBtn);

  let entranceBadgeNum = useSelector(
    state => state.extractPositionReducer.entranceBadge
  );

  let exitBadgeNum = useSelector(
    state => state.extractPositionReducer.exitBadge
  );

  let accessPointBadgeNum = useSelector(
    state => state.extractPositionReducer.accessPointBadge
  );

  let exhibitBadgeNum = useSelector(
    state => state.extractPositionReducer.exhibitBadge
  );

  let nameOfTemplate = useSelector(
    state => state.extractPositionReducer.nameOfTemplate
  );

  let enableSave = !(
    entranceBadgeNum === 1 &&
    exitBadgeNum === 1 &&
    accessPointBadgeNum >= 1 &&
    exhibitBadgeNum >= 1
  );

  const toggleSave = () => {
    setModalSave(!modalSave);
  };

  const saveButtonEvent = () => {
    const userInLocalStorage = JSON.parse(window.localStorage.getItem('user'));
    dispatch(sendNameOfTemplate(nameOfTemplate, userInLocalStorage.id));
    dispatch(sendRoomData(roomData));
    dispatch(sendLocalStorageUserId(userInLocalStorage));
    toggleSave();
    dispatch(sendSaveButtonState(saveBtn));
  };

  const toggleResize = () => {
    setModalResize(!modalResize);
  };

  const resizeButtonEvent = () => {
    dispatch(changeDimensions(height, width));
    toggleResize();
  };

  if (modalProps.type === 'resize') {
    return (
      <MDBContainer>
        <MDBBtn
          className="styleBtn2"
          style={{
            display: 'grid',
            gridTemplateColumns: '2rem auto',
            marginLeft: '9px',
            paddingLeft: '1rem',
            paddingRight: '2.6rem',
            marginBottom: '1rem',
            marginTop: '1rem',
            textAlign: 'center',
          }}
          color="white"
          onClick={toggleResize}>
          <MDBIcon
            icon="expand-arrows-alt"
            style={{ marginRight: '6px', marginTop: '4.5px' }}
          />
          Dimensions
        </MDBBtn>
        <MDBModal
          isOpen={modalResize}
          toggle={toggleResize}
          keyboard="true"
          size="lg"
          position="right">
          <MDBModalHeader
            style={{ paddingLeft: '18rem', color: 'black' }}
            toggle={toggleResize}>
            <b> Change Dimensions</b>
          </MDBModalHeader>

          <MDBModalBody>
            <MDBInput
              className="black-text"
              iconClass="black-text"
              label="Insert Height (Max Height: 23 squares)"
              icon="arrows-alt-v"
              valueDefault={height}
              onChange={e => (height = parseInt(e.target.value, 10))}
            />
            <MDBInput
              className="black-text"
              iconClass="black-text"
              label="Insert Width (Max Width: 38 squares)"
              icon="arrows-alt-h"
              valueDefault={width}
              onChange={e => (width = parseInt(e.target.value, 10))}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              style={{ borderRadius: '4px' }}
              outline
              color="black"
              onClick={() => resizeButtonEvent()}>
              Resize
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  } else if (modalProps.type === 'save') {
    return (
      <MDBContainer
        style={{
          flexBasis: '1px',
          paddingRight: ' 1px',
          paddingLeft: ' 1px',
          marginRight: ' 1px',
          marginLeft: ' 1px',
          height: '50%',
        }}>
        <MDBBtn
          disabled={enableSave}
          id="save"
          style={{
            display: 'grid',
            gridTemplateColumns: '2rem auto',
            marginLeft: '6px',
            paddingLeft: '1.5rem',
          }}
          onClick={toggleSave}>
          <MDBIcon
            icon="save"
            style={{ marginRight: '2px', marginTop: '3px' }}
          />
          Save
        </MDBBtn>
        <MDBModal
          isOpen={modalSave}
          toggle={toggleSave}
          keyboard="true"
          size="lg"
          position="bottom">
          <MDBModalHeader
            style={{ paddingLeft: '18rem', color: 'black' }}
            toggle={toggleSave}>
            <b>Name your Template</b>
          </MDBModalHeader>

          <MDBModalBody>
            <MDBInput
              className="black-text"
              iconClass="black-text"
              label="Insert Name of Room"
              icon="arrows-alt-v"
              valueDefault={nameOfTemplate}
              onChange={e => (nameOfTemplate = e.target.value)}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              style={{ borderRadius: '4px' }}
              outline
              color="black"
              onClick={() => saveButtonEvent()}>
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
};

export default Modal;
