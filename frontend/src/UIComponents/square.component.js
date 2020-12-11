import React from "react";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrop } from "react-dnd";
import {
  extractEntrancePosition,
  extractExitPosition,
  extractTypeOfDraggable,
  extractExhibitPosition,
  extractAccessPointPosition,
  extractWallPosition,
  extractEntranceBadge,
  extractExhibitBadge,
  extractExitBadge,
  extractAccessPointBadge,
  changeDimensions,
  changeIsResized,
  resetTypeOfDraggable,
  sendSquareComponentVariables,
} from "../actions/workstation";
import { useDispatch, useSelector } from "react-redux";
import DragAndDropItems from "./dragAndDropItems.component";

import "../styles/workstation.css";

let counterAP = 0;
let counterExhibit = 0;
let counterWall = 0;
let accessPointPositionArray = [];
let exhibitPositionArray = [];
let wallPositionArray = [];

export default function Square({
  black,
  pos,
  walls,
  outerSquares,
  roomCorners,
}) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const stroke = "black";
  const dispatch = useDispatch();

  // Delete all elements from arrays
  let resizedTemplate = useSelector(
    (state) => state.extractPositionReducer.isResized
  );

  if (resizedTemplate === true) {
    accessPointPositionArray = [];
    exhibitPositionArray = [];
    wallPositionArray = [];
    dispatch(changeIsResized());
    dispatch(resetTypeOfDraggable());
    counterAP = 0;
    counterExhibit = 0;
    counterWall = 0;
  }

  //Selectors for taking data
  let blackSquareColor = useSelector(
    (state) => state.colorPickerForDropReducer.blackSquare
  );

  let whiteSquareColor = useSelector(
    (state) => state.colorPickerForDropReducer.whiteSquare
  );

  let entrancePosition = useSelector(
    (state) => state.extractPositionReducer.entrance
  );

  let exitPosition = useSelector((state) => state.extractPositionReducer.exit);

  let accessPointPosition = useSelector(
    (state) => state.extractPositionReducer.accessPoint[counterAP]
  );

  if (typeof accessPointPosition === "number") {
    counterAP++;
    accessPointPositionArray.push(accessPointPosition);
    dispatch(
      sendSquareComponentVariables(
        counterAP,
        counterExhibit,
        counterWall,
        accessPointPositionArray,
        exhibitPositionArray,
        wallPositionArray
      )
    );
  }

  let positionThatWillUndo = useSelector(
    (state) => state.extractPositionReducer.positionThatWillUndo
  );

  if (accessPointPositionArray.includes(positionThatWillUndo)) {
    accessPointPositionArray.pop(positionThatWillUndo);
    counterAP--;
    dispatch(
      sendSquareComponentVariables(
        counterAP,
        counterExhibit,
        counterWall,
        accessPointPositionArray,
        exhibitPositionArray,
        wallPositionArray
      )
    );
  }

  let exhibitPosition = useSelector(
    (state) => state.extractPositionReducer.exhibit[counterExhibit]
  );

  if (typeof exhibitPosition === "number") {
    counterExhibit++;
    exhibitPositionArray.push(exhibitPosition);
    dispatch(
      sendSquareComponentVariables(
        counterAP,
        counterExhibit,
        counterWall,
        accessPointPositionArray,
        exhibitPositionArray,
        wallPositionArray
      )
    );
  }

  if (exhibitPositionArray.includes(positionThatWillUndo)) {
    exhibitPositionArray.pop(positionThatWillUndo);
    counterExhibit--;
    dispatch(
      sendSquareComponentVariables(
        counterAP,
        counterExhibit,
        counterWall,
        accessPointPositionArray,
        exhibitPositionArray,
        wallPositionArray
      )
    );
  }

  let typeOfDraggable = useSelector(
    (state) => state.extractTypeOfDraggableReducer
  );

  let wallPosition = useSelector(
    (state) => state.extractPositionReducer.wall[counterWall]
  );

  if (wallPositionArray.includes(positionThatWillUndo)) {
    wallPositionArray.pop(positionThatWillUndo);
    counterWall--;
    dispatch(
      sendSquareComponentVariables(
        counterAP,
        counterExhibit,
        counterWall,
        accessPointPositionArray,
        exhibitPositionArray,
        wallPositionArray
      )
    );
  }

  if (typeof wallPosition === "number") {
    counterWall++;
    wallPositionArray.push(wallPosition);
    dispatch(
      sendSquareComponentVariables(
        counterAP,
        counterExhibit,
        counterWall,
        accessPointPositionArray,
        exhibitPositionArray,
        wallPositionArray
      )
    );
  }

  //After drop dispatch to reducers
  const extractTargetId = async (targetId, item, mapOfTargetId) => {
    let arrayOfTargetId = Array.from(mapOfTargetId.keys());
    let realTargetId = arrayOfTargetId.indexOf(targetId);

    if (item.type === "entrance" && walls.includes(realTargetId)) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractEntrancePosition(realTargetId));
      dispatch(extractEntranceBadge());
    } else if (item.type === "exit" && walls.includes(realTargetId)) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractExitPosition(realTargetId));
      dispatch(extractExitBadge());
    } else if (item.type === "accessPoint" && !walls.includes(realTargetId)) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractAccessPointPosition(realTargetId));
      dispatch(extractAccessPointBadge());
    } else if (item.type === "exhibit" && !walls.includes(realTargetId)) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractExhibitPosition(realTargetId));
      dispatch(extractExhibitBadge());
    } else if (item.type === "wall" && !walls.includes(realTargetId)) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractWallPosition(realTargetId));
    }
    return { id: realTargetId };
  };

  //Hook for making the squares droppable

  const [{ isOver }, drop] = useDrop({
    accept: [
      DnDItemTypes.ENTRANCE,
      DnDItemTypes.EXIT,
      DnDItemTypes.ACCESSPOINT,
      DnDItemTypes.EXHIBIT,
      DnDItemTypes.WALL,
    ],
    drop: (item, monitor) => {
      // console.log(george.indexOf(monitor.targetId));
      extractTargetId(
        monitor.targetId,
        item,
        monitor.internalMonitor.registry.dropTargets
      );
    },

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  //Background icon color change after drag

  let bg = isOver ? blackSquareColor : fill;
  let insideBg = isOver ? whiteSquareColor : fill;

  // Render different Squares
  if (
    pos !== entrancePosition &&
    pos !== exitPosition &&
    !accessPointPositionArray.includes(pos) &&
    !exhibitPositionArray.includes(pos) &&
    !wallPositionArray.includes(pos) &&
    fill === "rgba(40, 40, 40, 0.1)"
  ) {
    if (roomCorners.includes(pos)) {
      return (
        <div
          style={{
            backgroundColor: bg,
            color: stroke,
            width: "20px",
            height: "20px",
            border: "rgba(40, 40, 40, 0.1) solid 1px",
          }}
        ></div>
      );
    } else {
      return (
        <div
          ref={drop}
          style={{
            backgroundColor: bg,
            color: stroke,
            width: "20px",
            height: "20px",
            border: "rgba(40, 40, 40, 0.1) solid 1px",
          }}
        ></div>
      );
    }
  } else if (
    pos !== entrancePosition &&
    pos !== exitPosition &&
    !accessPointPositionArray.includes(pos) &&
    !exhibitPositionArray.includes(pos) &&
    !wallPositionArray.includes(pos) &&
    fill === "white"
  ) {
    if (outerSquares.includes(pos)) {
      return (
        <div
          style={{
            backgroundColor: bg,
            color: stroke,
            width: "20px",
            height: "20px",
            border: "rgba(40, 40, 40, 0.1) solid 1px",
          }}
        ></div>
      );
    } else {
      return (
        <div
          ref={drop}
          style={{
            backgroundColor: insideBg,
            color: "red",
            width: "20px",
            height: "20px",
            border: "rgba(40, 40, 40, 0.1) solid 1px",
            zIndex: 1,
          }}
        ></div>
      );
    }
  } else if (typeOfDraggable === "entrance" || entrancePosition === pos) {
    return <DragAndDropItems role="entrance" />;
  } else if (typeOfDraggable === "exit" || exitPosition === pos) {
    return <DragAndDropItems role="exit" />;
  } else if (
    typeOfDraggable === "accessPoint" ||
    accessPointPositionArray.includes(pos)
  ) {
    return <DragAndDropItems role="accessPoint" />;
  } else if (
    typeOfDraggable === "exhibit" ||
    exhibitPositionArray.includes(pos)
  ) {
    return <DragAndDropItems role="exhibit" />;
  } else if (typeOfDraggable === "wall" || wallPositionArray.includes(pos)) {
    return <DragAndDropItems role="wall" />;
  } else {
    return true;
  }
}

export const MemoizedSquare = React.memo(Square);
