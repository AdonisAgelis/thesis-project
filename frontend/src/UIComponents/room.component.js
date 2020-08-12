import React, { useState } from "react";
import Square from "./square.component";
import DnDIcons from "./dndIcons.component";

// i : number of squares
const renderSquare = (i) => {

  let leftSideWallArray = [];
  let rightSideWallArray = [];
  let topSideWallArray = [];
  let botSideWallArray = [];

  for (let leftSideWall = 41; leftSideWall < 941; leftSideWall += 40) {
    leftSideWallArray.push(leftSideWall);
  }
  for (let rightSideWall = 78; rightSideWall < 978; rightSideWall += 40) {
    rightSideWallArray.push(rightSideWall);
  }

  for (let topSideWall = 42; topSideWall < 78; topSideWall++) {
    topSideWallArray.push(topSideWall);
  }

  for (let botSideWall = 922; botSideWall < 958; botSideWall++) {
    botSideWallArray.push(botSideWall);
  }

  const verticalWallArrays = leftSideWallArray.concat(rightSideWallArray);
  const horizontalWallArrays = topSideWallArray.concat(botSideWallArray);
  const WallArrays = verticalWallArrays.concat(horizontalWallArrays);

  let black = null;

  if (WallArrays.includes(i)) {
    black = true;
  } else {
    black = false;
  }

  return (
    <div key={i} style={{ width: "20px", height: "20px" }}>
      <Square black={black} pos={i} walls={WallArrays}>{renderPiece(i)}</Square>
    </div>
  );
};

const renderPiece = (i, itemPosition) => {
  if (i === itemPosition) {
    return <DnDIcons role='entrance' />
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
