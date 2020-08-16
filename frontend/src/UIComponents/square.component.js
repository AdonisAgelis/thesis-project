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
  changeColorAfterDropping
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import DnDIcons from "./dndIcons.component";

import "../styles/profile.css";

let counterAP = 0;
let counterExhibit = 0;
let counterWall = 0;
let accessPointPositionArray = [];
let exhibitPositionArray = [];
let wallPositionArray = [];

export default function Square({ black, pos, walls }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const stroke = "black"; /*? "white" : "grey"*/
  const dispatch = useDispatch();
  const roomCorners = [41, 78, 921, 958];
  const outerLeftSide = [];
  const outerRightSide = [];
  const outerTopSide = [];
  const outerBotSide = [];

  // Make outer squares non-droppable zone

  for (let outerLeft = 40; outerLeft <= 920; outerLeft += 40) {
    outerLeftSide.push(outerLeft);
  }

  for (let outerRight = 79; outerRight <= 959; outerRight += 40) {
    outerRightSide.push(outerRight);
  }

  for (let outerTop = 0; outerTop <= 39; outerTop++) {
    outerTopSide.push(outerTop);
  }

  for (let outerBot = 960; outerBot <= 999; outerBot++) {
    outerBotSide.push(outerBot);
  }

  const outerVerticalSquares = outerLeftSide.concat(outerRightSide);
  const outerHorizonalSquares = outerTopSide.concat(outerBotSide);
  const outerSquares = outerVerticalSquares.concat(outerHorizonalSquares);

  // Change colors after dropping items on white squares

  let backGround = useSelector(
    (state) => state.colorChangerOnDropReducer.bgColor
  );

  let icons = useSelector(
    (state) => state.colorChangerOnDropReducer.iconColor
  );

  //Selector for taking data
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

  if (typeof accessPointPosition == "number") {
    counterAP++;
    accessPointPositionArray.push(accessPointPosition);
  }

  let exhibitPosition = useSelector(
    (state) => state.extractPositionReducer.exhibit[counterExhibit]
  );

  if (typeof exhibitPosition == "number") {
    counterExhibit++;
    exhibitPositionArray.push(exhibitPosition);
  }

  let typeOfDraggable = useSelector(
    (state) => state.extractTypeOfDraggableReducer
  );

  let wallPosition = useSelector(
    (state) => state.extractPositionReducer.wall[counterWall]
  );

  if (typeof wallPosition == "number") {
    counterWall++;
    wallPositionArray.push(wallPosition);
  }

  //After drop dispatch to reducers
  const extractTargetId = (x, item) => {
    if (
      item.type === "entrance" &&
      walls.includes(parseInt(x.replace("T", ""), 10))
    ) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractEntrancePosition(x));
    } else if (
      item.type === "exit" &&
      walls.includes(parseInt(x.replace("T", ""), 10))
    ) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractExitPosition(x));
    } else if (
      item.type === "accessPoint" &&
      !walls.includes(parseInt(x.replace("T", ""), 10))
    ) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractAccessPointPosition(x));
      dispatch(changeColorAfterDropping())
    } else if (
      item.type === "exhibit" &&
      !walls.includes(parseInt(x.replace("T", ""), 10))
    ) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractExhibitPosition(x));
      dispatch(changeColorAfterDropping())
    } else if (
      item.type === "wall" &&
      !walls.includes(parseInt(x.replace("T", ""), 10))
    ) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractWallPosition(x));
      dispatch(changeColorAfterDropping())
    }
    return { id: x };
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
    drop: (item, monitor) => extractTargetId(monitor.targetId, item),

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
    return (
      <div
        ref={drop}
        style={{
          backgroundColor: insideBg,
          color: stroke,
          width: "20px",
          height: "20px",
          border: "rgba(40, 40, 40, 0.1) solid 1px",
        }}
      ></div>
    );
  } else if (typeOfDraggable === "entrance") {
    return <DnDIcons role="entrance" />;
  } else if (typeOfDraggable === "exit") {
    return <DnDIcons role="exit" />;
  } else if (typeOfDraggable === "accessPoint") {
    return <DnDIcons role="accessPoint" />;
  } else if (typeOfDraggable === "exhibit") {
    return <DnDIcons role="exhibit" />;
  } else if (typeOfDraggable === "wall") {
    return <DnDIcons role="wall" />;
  } else {
    return true;
  }
}
