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

export const extractSquarePosition = (value) => {
  return {
    type: 'EXTRACT_SQUARE_POSITION',
    payload: value
  }
};
