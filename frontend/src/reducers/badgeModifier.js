const initialState = {
  entranceBadge: 1,
  exitBadge: 1,
  accessPointBadge: 2,
  exhibitBadge: 10,
};

const badgeModifierReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default badgeModifierReducer;
