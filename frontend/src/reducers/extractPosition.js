const state = {entrance: null, exit: null};

const extractPositionReducer = (
    state,
    action
  ) => {
    switch (action.type) {
      case "EXTRACT_ENTRANCE_POSITION":
        action.payload = parseInt(action.payload.replace('T', ''), 10);
        return (state.entrance = action.payload);
      case 'EXTRACT_EXIT_POSITION':
        action.payload = parseInt(action.payload.replace('T', ''), 10);
        return (state.entrance = action.payload);
      default:
        return state;
    }
  };
  
  export default extractPositionReducer;
  