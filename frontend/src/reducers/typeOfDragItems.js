const extractTypeOfDraggableReducer = (state = null, action) => {
  switch (action.type) {
    case 'RESET_TYPE_OF_DRAGGABLE':
      state = null;
      return state;
    case 'EXTRACT_TYPE_OF_DRAGGABLE':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default extractTypeOfDraggableReducer;
