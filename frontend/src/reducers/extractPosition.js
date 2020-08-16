const initialState = {
  entrance: null,
  exit: null,
  accessPoint: [null, null],
  exhibit: [null, null, null, null, null, null, null, null, null, null],
  wall: [null],
  counterAccessPoint: 0,
  counterExhibit: 0,
  counterWall: 0,
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
      if (state.counterAccessPoint < 2) {
        action.payload = parseInt(action.payload.replace("T", ""), 10);
        state.accessPoint[state.counterAccessPoint] = action.payload;
        state.counterAccessPoint++;
      }
      return state;
    case "EXTRACT_EXHIBIT_POSITION":
      if (state.counterExhibit < 10) {
        action.payload = parseInt(action.payload.replace("T", ""), 10);
        state.exhibit[state.counterExhibit] = action.payload;
        state.counterExhibit++;
      }
      return state;
    case "EXTRACT_WALL_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.wall[state.counterWall] = action.payload;
      state.counterWall++;
      return state;
    default:
      return { ...state };
  }
};

export default extractPositionReducer;
