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
  allPositions: [null],
  // Badges
  entranceBadge: 1,
  exitBadge: 1,
  accessPointBadge: 2,
  exhibitBadge: 10,
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
    case "EXTRACT_ENTRANCE_BADGE":
      if (state.entranceBadge > 0) {
        state.entranceBadge = state.entranceBadge - 1;
      }
      return state;
    case "EXTRACT_EXIT_BADGE":
      if (state.exitBadge > 0) {
        state.exitBadge = state.exitBadge - 1;
      }
      return state;
    case "EXTRACT_ACCESS_POINT_BADGE":
      if (state.accessPointBadge > 0) {
        state.accessPointBadge = state.accessPointBadge - 1;
      }
      return state;
    case "EXTRACT_EXHIBIT_BADGE":
      if (state.exhibitBadge > 0) {
        state.exhibitBadge = state.exhibitBadge - 1;
      }
      return state;
    case "UNDO_AFTER_CLICKING":
      if (state.allPositions[state.counterAllPositions] !== null) {
        if (state.allPositions[state.counterAllPositions - 1] === state.entrance) {
          state.entrance = null;
          state.allPositions.pop();
          state.counterAllPositions--;
          state.entranceBadge++;
        } else if (state.allPositions[state.counterAllPositions - 1] === state.exit) {
          state.exit = null;
          state.allPositions.pop();
          state.counterAllPositions--;
          state.exitBadge++;
        } else if (state.allPositions[state.counterAllPositions - 1] === state.accessPoint[state.counterAccessPoint - 1]) {
          state.positionThatWillUndo = state.allPositions[state.counterAllPositions - 1];
          state.accessPoint[state.counterAccessPoint - 1] = null;
          state.allPositions.pop();
          if (state.counterAccessPoint > 0) {
            state.counterAccessPoint--;
            state.counterAllPositions--;
            state.accessPointBadge++;
          }
        } else if (state.allPositions[state.counterAllPositions - 1] === state.exhibit[state.counterExhibit - 1]) {
          state.positionThatWillUndo = state.allPositions[state.counterAllPositions - 1];
          state.exhibit[state.counterExhibit - 1] = null;
          state.allPositions.pop();
          if (state.counterExhibit > 0) {
            state.counterExhibit--;
            state.counterAllPositions--;
            state.exhibitBadge++;
          }
        } else if (state.allPositions[state.counterAllPositions - 1] === state.wall[state.counterWall - 1]) {
          state.positionThatWillUndo = state.allPositions[state.counterAllPositions - 1];
          state.wall[state.counterWall - 1] = null;
          state.allPositions.pop();
          if (state.counterWall > 0) {
            state.counterWall--;
            state.counterAllPositions--;
          }
        } else {
          return state;
        }
      }
    default:
      return { ...state };
  }
};

export default extractPositionReducer;
