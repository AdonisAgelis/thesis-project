import React from "react";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrop } from "react-dnd";
import {
  extractEntrancePosition,
  extractExitPosition,
  extractTypeOfDraggable,
  extractExhibitPosition,
  extractAccessPointPosition,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import DnDIcons from "./dndIcons.component";

import "../styles/profile.css";

export default function Square({ black, pos, walls }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const roomCorners = [41, 78, 921, 958];
  const stroke = "black"; /*? "white" : "grey"*/

  //Selector for taking data

  const dispatch = useDispatch();
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
    (state) => state.extractPositionReducer.accessPoint
  );
  let exhibitPosition = useSelector(
    (state) => state.extractPositionReducer.exhibit
  );
  let typeOfDraggable = useSelector(
    (state) => state.extractTypeOfDraggableReducer
  );

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
    } else if (
      item.type === "exhibit" &&
      !walls.includes(parseInt(x.replace("T", ""), 10))
    ) {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractExhibitPosition(x));
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
    pos !== accessPointPosition &&
    pos !== exhibitPosition &&
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
    pos !== accessPointPosition &&
    pos !== exhibitPosition &&
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
  } else {
    return true;
  }
}
