export const dropSecondColumn = () => {
  return {
    type: "DROP_SECOND_COLUMN",
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
  };
};
