const initialState = {
  blackSquare: null,
  whiteSquare: null,
};

const colorPickerForDropReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXTRACT_VALID_DROP_COLOR_FOR_ENTRANCE_EXIT':
      state.blackSquare = 'green';
      state.whiteSquare = 'red';
      return state;
    case 'EXTRACT_VALID_DROP_COLOR_FOR_ELSE':
      state.blackSquare = 'red';
      state.whiteSquare = 'green';
    default:
      return { ...state };
  }
};

export default colorPickerForDropReducer;
