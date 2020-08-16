const initialState = {
    bgColor: null,
    iconColor: null,
  };
  
  const colorChangerOnDropReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR_AFTER_DROPPING':
        state.bgColor = 'white';
        state.iconColor = 'black';
        return state;
      default:
        return { ...state };
    }
  };
  
  export default colorChangerOnDropReducer;
  