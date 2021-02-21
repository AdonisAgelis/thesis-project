export const dropSecondColumn = () => {
  return {
    type: "DROP_SECOND_COLUMN",
  };
};

export const dropSecondColumnLoad = () => {
  return {
    type: "DROP_SECOND_COLUMN_LOAD",
  };
};

export const updateFirstDropDown = (value) => {
  return {
    type: "UPDATE_FIRST_DROPDOWN",
    payload: value,
  };
};

export const updateSecondDropDown = (value) => {
  return {
    type: "UPDATE_SECOND_DROPDOWN",
    payload: value,
  };
};

export const extractEntrancePosition = (value) => {
  return {
    type: "EXTRACT_ENTRANCE_POSITION",
    payload: value,
  };
};

export const extractExitPosition = (value) => {
  return {
    type: "EXTRACT_EXIT_POSITION",
    payload: value,
  };
};

export const extractTypeOfDraggable = (value) => {
  return {
    type: "EXTRACT_TYPE_OF_DRAGGABLE",
    payload: value,
  };
};

export const extractAccessPointPosition = (value) => {
  return {
    type: "EXTRACT_ACCESS_POINT_POSITION",
    payload: value,
  };
};

export const extractExhibitPosition = (value) => {
  return {
    type: "EXTRACT_EXHIBIT_POSITION",
    payload: value,
  };
};

export const extractValidDropColorForEntranceExit = () => {
  return {
    type: "EXTRACT_VALID_DROP_COLOR_FOR_ENTRANCE_EXIT",
  };
};

export const extractValidDropColorForElse = () => {
  return {
    type: "EXTRACT_VALID_DROP_COLOR_FOR_ELSE",
  };
};

export const extractWallPosition = (value) => {
  return {
    type: "EXTRACT_WALL_POSITION",
    payload: value,
  };
};

//BADGE ACTIONS

export const extractEntranceBadge = () => {
  return {
    type: "EXTRACT_ENTRANCE_BADGE",
  };
};

export const extractExitBadge = () => {
  return {
    type: "EXTRACT_EXIT_BADGE",
  };
};

export const extractAccessPointBadge = () => {
  return {
    type: "EXTRACT_ACCESS_POINT_BADGE",
  };
};

export const extractExhibitBadge = () => {
  return {
    type: "EXTRACT_EXHIBIT_BADGE",
  };
};

// ENABLING BUTTONS

export const enableSimulationButton = () => {
  return {
    type: "ENABLE_SIMULATION_BUTTON",
  };
};

export const enableDropDownOptions = () => {
  return {
    type: "ENABLE_DROP_DOWN_OPTIONS",
  };
};

export const sendSaveButtonState = () => {
  return {
    type: "SEND_SAVE_BUTTON_STATE",
  };
};

// UNDO FEATURE

export const undoAfterClicking = () => {
  return {
    type: "UNDO_AFTER_CLICKING",
  };
};

// CHANGE DIMENSIONS

export const changeDimensions = (valueX, valueY) => {
  return {
    type: "CHANGE_DIMENSIONS",
    payloadX: valueX,
    payloadY: valueY,
  };
};

export const resetRoom = () => {
  return {
    type: "RESET_ROOM",
  };
};

export const changeIsResized = () => {
  return {
    type: "CHANGE_IS_RESIZED",
  };
};

// Reset type of Draggable

export const resetTypeOfDraggable = () => {
  return {
    type: "RESET_TYPE_OF_DRAGGABLE",
  };
};

//Send Name Of Template

export const sendNameOfTemplate = (value1, value2) => {
  return {
    type: "SEND_NAME_OF_TEMPLATE",
    payload1: value1,
    payload2: value2,
  };
};

// Send Square Component Variables

export const sendSquareComponentVariables = (
  value1,
  value2,
  value3,
  value4,
  value5,
  value6
) => {
  return {
    type: "SEND_SQUARE_COMPONENT_VARIABLES",
    payload1: value1,
    payload2: value2,
    payload3: value3,
    payload4: value4,
    payload5: value5,
    payload6: value6,
  };
};

export const sendRoomDataFromLoad = (
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
  value13,
  value14,
  value15,
  value16,
  value17,
  value18,
  value19,
  value20,
  value21,
  value22,
  value23,
  value24,
  value25,
  value26
) => {
  return {
    type: "SEND_ROOM_DATA_FROM_LOAD",
    payload1: value1,
    payload2: value2,
    payload3: value3,
    payload4: value4,
    payload5: value5,
    payload6: value6,
    payload7: value7,
    payload8: value8,
    payload9: value9,
    payload10: value10,
    payload11: value11,
    payload12: value12,
    payload13: value13,
    payload14: value14,
    payload15: value15,
    payload16: value16,
    payload17: value17,
    payload18: value18,
    payload19: value19,
    payload20: value20,
    payload21: value21,
    payload22: value22,
    payload23: value23,
    payload24: value24,
    payload25: value25,
    payload26: value26,
  };
};
