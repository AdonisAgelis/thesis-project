const dropdownSecondSelectionsReducer = (
  state = "NUMBER OF PEOPLE",
  action
) => {
  switch (action.type) {
    case "DISABLE_ADD_BUTTON":
      state = 'NUMBER OF PEOPLE';
      return state;
    case "UPDATE_SECOND_DROPDOWN":
      return (state = action.payload);
    default:
      return state;
  }
};

export default dropdownSecondSelectionsReducer;
