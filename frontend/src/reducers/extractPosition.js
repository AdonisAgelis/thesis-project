const initialState = {
  entrance: null,
  exit: null,
  accessPoint: null,
  exhbit: null,
};

const extractPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXTRACT_ENTRANCE_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.entrance = action.payload;
      return state;
    case "EXTRACT_EXIT_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.exit = action.payload;
      return state;
    case "EXTRACT_ACCESS_POINT_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.accessPoint = action.payload;
      return state;
    case "EXTRACT_EXHIBIT_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.exhibit = action.payload;
      return state;
    default:
      return { ...state };
  }
};

export default extractPositionReducer;
