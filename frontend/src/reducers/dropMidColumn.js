const dropMidColumnReducer = (state = "1", action) => {
  switch (action.type) {
    case "DROP_SECOND_COLUMN":
      return "2";
    default:
      return state;
  }
};

export default dropMidColumnReducer;
