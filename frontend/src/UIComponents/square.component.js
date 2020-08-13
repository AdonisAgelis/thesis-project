import React from "react";
import "../styles/profile.css";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrop } from 'react-dnd';
import { extractSquarePosition } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import DnDIcons from "./dndIcons.component";

export default function Square({ black, pos, children, walls }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const stroke = "black"; /*? "white" : "grey"*/
  const dispatch = useDispatch();
  const headButt = useSelector(state => state.extractPositionReducer);

  const extractTargetId = (x) => {
    dispatch(extractSquarePosition(x));
    return { id: x }
  };

  const [{ isOver }, drop] = useDrop({
    accept: DnDItemTypes.ENTRANCE,
    drop: (item, monitor) => extractTargetId(monitor.targetId),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });

  let bg = isOver ? 'blue' : fill

  if (pos !== headButt && fill == 'rgba(40, 40, 40, 0.1)') {
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
        {children}
      </div>
    );
  } else if (pos !== headButt && fill == 'white') {
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
        {children}
      </div>
    );
  } else if (walls.includes(headButt)) {
    return <DnDIcons role='entrance' />
  }
}
