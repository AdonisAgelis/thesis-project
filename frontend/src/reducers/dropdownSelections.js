const dropdownSelectionsReducer = (state = 3, action) => {
  switch (action.type) {
    case "UPDATE_FIRST_DROPDOWN":
      return (state = action.payload);
    default:
      return state;
  }
};

export default dropdownSelectionsReducer;
