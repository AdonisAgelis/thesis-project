import React from "react";
import "../styles/profile.css";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrop } from 'react-dnd';

export default function Square({ black, children }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const stroke = "black"; /*? "white" : "grey"*/

  const [{ isOver }, drop] = useDrop({
    accept: DnDItemTypes.ENTRANCE,
    drop: (item, monitor) => console.log(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });

  let bg = isOver ? 'blue' : fill

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
}
