const initialState = {
  entrance: null,
  exit: null,
  accessPoint: [null, null],
  exhibit: [null, null, null, null, null, null, null, null, null, null],
  wall: [null],
  positionThatWillUndo: null,
  counterAccessPoint: 0,
  counterExhibit: 0,
  counterWall: 0,
  counterAllPositions: 0,
  allPositions: [null]
};

const extractPositionReducer = (state = initialState, action) => {
  state.positionThatWillUndo = null;
  switch (action.type) {
    case "EXTRACT_ENTRANCE_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.entrance = action.payload;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_EXIT_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.exit = action.payload;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_ACCESS_POINT_POSITION":
      if (state.counterAccessPoint < 2) {
        action.payload = parseInt(action.payload.replace("T", ""), 10);
        state.accessPoint[state.counterAccessPoint] = action.payload;
        state.counterAccessPoint++;
        state.allPositions[state.counterAllPositions] = action.payload;
        state.counterAllPositions++;
      }
      return state;
    case "EXTRACT_EXHIBIT_POSITION":
      if (state.counterExhibit < 10) {
        action.payload = parseInt(action.payload.replace("T", ""), 10);
        state.exhibit[state.counterExhibit] = action.payload;
        state.counterExhibit++;
        state.allPositions[state.counterAllPositions] = action.payload;
        state.counterAllPositions++;
      }
      return state;
    case "EXTRACT_WALL_POSITION":
      action.payload = parseInt(action.payload.replace("T", ""), 10);
      state.wall[state.counterWall] = action.payload;
      state.counterWall++;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "UNDO_AFTER_CLICKING":
      if (state.allPositions[state.counterAllPositions] !== null) {
        if (state.allPositions[state.counterAllPositions - 1] === state.entrance) {
          state.entrance = null;
          state.allPositions.pop();
          state.counterAllPositions--;
        } else if (state.allPositions[state.counterAllPositions - 1] === state.exit) {
          state.exit = null;
          state.allPositions.pop();
          state.counterAllPositions--;
        } else if (state.allPositions[state.counterAllPositions - 1] === state.accessPoint[state.counterAccessPoint - 1]) {
          console.log(state.counterAllPositions);
          state.positionThatWillUndo = state.allPositions[state.counterAllPositions - 1];
          state.accessPoint[state.counterAccessPoint - 1] = null;
          state.allPositions.pop();
          state.counterAccessPoint--;
          state.counterAllPositions--;
          console.log(state.counterAllPositions);
        } else if (state.allPositions[state.counterAllPositions - 1] === state.exhibit[state.counterExhibit - 1]) {
          state.exhibit[state.counterExhibit - 1] = null;
          state.allPositions.pop();
          state.counterAllPositions--;
        } else if (state.allPositions[state.counterAllPositions - 1] === state.wall[state.counterWall - 1]) {
          state.wall[state.counterWall - 1] = null;
          state.allPositions.pop();
          state.counterAllPositions--;
        }
      }
    default:
      return { ...state };
  }
};

export default extractPositionReducer;
