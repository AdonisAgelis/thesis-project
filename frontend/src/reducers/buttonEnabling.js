const initialState = {
    disabledBtn: true
  };
  
  const buttonEnablingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENABLE_BUTTONS_AFTER_CLICKING":
        state.disabledBtn = false;
        return state;
      default:
        return { ...state };
    }
  };
  
  export default buttonEnablingReducer;
  