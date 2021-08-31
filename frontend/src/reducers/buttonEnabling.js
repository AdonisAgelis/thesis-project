const initialState = {
  disabledSimBtn: true,
  disabledGroupBtns: true,
  saveBtn: true,
  isLoaded: false,
};

const buttonEnablingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENABLE_SIMULATION_BUTTON':
      state.disabledSimBtn = false;
      return state;
    case 'ENABLE_DROP_DOWN_OPTIONS':
      state.disabledGroupBtns = false;
      return state;
    case 'SEND_SAVE_BUTTON_STATE':
      state.saveBtn = false;
      return state;
    case 'ROOM_IS_LOADED':
      state.isLoaded = true;
      return state;
    default:
      return { ...state };
  }
};

export default buttonEnablingReducer;
