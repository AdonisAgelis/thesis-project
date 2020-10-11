const initialState = {
    disabledBtn: true,
    disabledGroupBtns: true
  };
  
  const buttonEnablingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "RESIZED_DIMENSIONS":
        state.disabledBtn = true;
        state.disabledGroupBtns = true;
        return state;
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
  