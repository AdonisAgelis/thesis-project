import React from "react";
import "./profile.css";
import { DnDItemTypes } from "./dndItemTypes";
import { useDrop } from 'react-dnd';

export default function Square({ black, children }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const stroke = "black"; /*? "white" : "grey"*/

  // const [{ isOver, canDrop }, drop] = useDrop({
  //   accept: DnDItemTypes.ENTRANCE,
  //   drop: () => moveIcon(i),
  //   collect: (mon) => ({
  //     isOver: !!mon.isOver(),
  //     canDrop: !!mon.canDrop()
  //   })
  // });

  return (
    <div
      style={{
        backgroundColor: fill,
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
