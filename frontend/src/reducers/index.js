import dropMidColumnReducer from "./dropMidColumn";
import dropdownSelectionsReducer from "./dropdownSelections";
import dropdownSecondSelectionsReducer from "./dropdownSecondSelection";
import extractPositionReducer from "./extractPosition";
import extractTypeOfDraggableReducer from "./typeOfDragItems";
import colorPickerForDropReducer from "./colorPickerForDrop";
import colorChangerOnDropReducer from './colorChangerOnDrop';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  dropMidColumnReducer,
  dropdownSelectionsReducer,
  dropdownSecondSelectionsReducer,
  extractPositionReducer,
  extractTypeOfDraggableReducer,
  colorPickerForDropReducer,
  colorChangerOnDropReducer
});

export default allReducers;
