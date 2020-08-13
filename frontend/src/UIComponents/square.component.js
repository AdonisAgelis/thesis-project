import React from "react";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrop } from 'react-dnd';
import { extractEntrancePosition, extractExitPosition, extractTypeOfDraggable } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import DnDIcons from "./dndIcons.component";

import "../styles/profile.css";

export default function Square({ black, pos }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const roomCorners = [41, 78, 921, 958];
  const stroke = "black"; /*? "white" : "grey"*/
  const dispatch = useDispatch();
  let entrancePosition = useSelector(state => state.extractPositionReducer.entrance);
  let exitPosition = useSelector(state => state.extractPositionReducer.exit);
  let typeOfDraggable = useSelector(state => state.extractTypeOfDraggableReducer);

  const extractTargetId = (x, item) => {
    if (item.type === 'entrance') {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractEntrancePosition(x));
    } else if (item.type === 'exit') {
      dispatch(extractTypeOfDraggable(item.type));
      dispatch(extractExitPosition(x));
    }
    return { id: x };
  };

  const [{ isOver }, drop] = useDrop({
    accept: [DnDItemTypes.ENTRANCE, DnDItemTypes.EXIT],
    drop: (item, monitor) => extractTargetId(monitor.targetId, item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });

  let bg = isOver ? 'yellow' : fill;

  if (pos !== entrancePosition && pos !== exitPosition && fill === 'rgba(40, 40, 40, 0.1)') {
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
        >
        </div>
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
        >
        </div>
      );
    }
  } else if (pos !== entrancePosition && pos !== exitPosition && fill === 'white') {
    return (
      <div
        style={{
          backgroundColor: bg,
          color: stroke,
          width: "20px",
          height: "20px",
          border: "rgba(40, 40, 40, 0.1) solid 1px",
        }}
      >
      </div>
    );
  } else if (typeOfDraggable === 'entrance') {
    return <DnDIcons role='entrance' />
  } else if (typeOfDraggable === 'exit') {
    return <DnDIcons role='exit' />
  }
}
