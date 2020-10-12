const initialState = {
    disabledBtn: true,
    disabledGroupBtns: true
  };
  
  const buttonEnablingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENABLE_BUTTONS_AFTER_CLICKING":
        state.disabledBtn = false;
        return state;
      case "ENABLE_DROP_DOWN_OPTIONS":
        state.disabledGroupBtns = false;
        return state;
      default:
        return { ...state };
    }
  };
  
  export default buttonEnablingReducer;
  