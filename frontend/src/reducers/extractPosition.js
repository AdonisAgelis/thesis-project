const extractPositionReducer = (
    state = 0,
    action
  ) => {
    switch (action.type) {
      case "EXTRACT_SQUARE_POSITION":
        action.payload = parseInt(action.payload.replace('T', ''), 10);
        return (state = action.payload);
      default:
        return state;
    }
  };
  
  export default extractPositionReducer;
  