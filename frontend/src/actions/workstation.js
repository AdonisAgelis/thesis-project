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

export const enableButtonsAfterClicking = () => {
  return {
    type: "ENABLE_BUTTONS_AFTER_CLICKING",
  };
};

export const enableDropDownOptions = () => {
  return {
    type: "ENABLE_DROP_DOWN_OPTIONS",
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
