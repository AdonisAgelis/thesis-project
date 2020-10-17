import dropMidColumnReducer from "./dropMidColumn";
import dropdownSelectionsReducer from "./dropdownSelections";
import dropdownSecondSelectionsReducer from "./dropdownSecondSelection";
import extractPositionReducer from "./extractPosition";
import extractTypeOfDraggableReducer from "./typeOfDragItems";
import colorPickerForDropReducer from "./colorPickerForDrop";
import buttonEnablingReducer from "./buttonEnabling";
import authReducer from "./auth";
import messageReducer from "./message";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  dropMidColumnReducer,
  dropdownSelectionsReducer,
  dropdownSecondSelectionsReducer,
  extractPositionReducer,
  extractTypeOfDraggableReducer,
  colorPickerForDropReducer,
  buttonEnablingReducer,
  authReducer,
  messageReducer,
});

export default allReducers;
