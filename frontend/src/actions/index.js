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
    type: 'EXTRACT_ENTRANCE_POSITION',
    payload: value
  }
};

export const extractExitPosition = (value) => {
  return {
    type: 'EXTRACT_EXIT_POSITION',
    payload: value
  }
};
