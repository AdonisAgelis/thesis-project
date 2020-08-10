const dropdownSecondSelectionsReducer = (
  state = "NUMBER OF PEOPLE",
  action
) => {
  switch (action.type) {
    case "UPDATE_SECOND_DROPDOWN":
      return (state = action.payload);

    default:
      return state;
  }
};

export default dropdownSecondSelectionsReducer;
