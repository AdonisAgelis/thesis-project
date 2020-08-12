import React, { useState } from "react";
import Square from "./square.component";
import DnDIcons from "./dndIcons.component";

// i : number of squares
const renderSquare = (i) => {

  let leftSideWallArray = [];
  let rightSideWallArray = [];

  for (let leftSideWall = 41; leftSideWall < 941; leftSideWall += 40) {
    leftSideWallArray.push(leftSideWall);
  }
  for (let rightSideWall = 78; rightSideWall < 978; rightSideWall += 40) {
    leftSideWallArray.push(rightSideWall);
  }

  let black = null;
  if (i > 41 && i < 78) {
    black = true;
  } else if (leftSideWallArray.includes(i)) {
    black = true;
  } else if (rightSideWallArray.includes(i)) {
    black = true;
  } else if (i > 921 && i < 958) {
    black = true;
  } else {
    black = false;
  }

  return (
    <div key={i} style={{ width: "20px", height: "20px" }}>
      <Square black={black} pos={i}>{renderPiece(i)}</Square>
    </div>
  );
};

const renderPiece = (i, itemPosition) => {
  if (i === itemPosition) {
    return <DnDIcons role='entrance'/>
  }
};

export default function Room() {

  const squares = [];
  for (let i = 0; i < 1000; i++) {
    squares.push(renderSquare(i));
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(40, [col] 20px)",
        overflow: "scroll",
      }}
    >
      {squares}
    </div>
  );
}
