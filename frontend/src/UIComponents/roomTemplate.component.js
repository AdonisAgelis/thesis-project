import React, { useState } from "react";
import Square from "./square.component";
import DragAndDropItems from "./dragAndDropItems.component";

// i : number of squares
const renderSquare = (i) => {

  const outerLeftSide = [];
  const outerRightSide = [];
  const outerTopSide = [];
  const outerBotSide = [];

  let z = 6;
  let x = 40 * z;
  let y = 15;

  // Make outer squares non-droppable zone

  for (let outerLeft = 40; outerLeft <= 920; outerLeft += 40) {
    for (let a = outerLeft; a <= outerLeft + y; a++) {
      outerLeftSide.push(a);
    }
  }

  for (let outerRight = 79; outerRight <= 959; outerRight += 40) {
    for (let b = outerRight; b >= outerRight - y; b--) {
      outerRightSide.push(b);
    }
  }

  for (let outerTop = 0; outerTop <= (39 * (z + 1)) + z; outerTop++) {
    outerTopSide.push(outerTop);
  }

  for (let outerBot = (960 - (39 * z)) - z; outerBot <= 999; outerBot++) {
    outerBotSide.push(outerBot);
  }

  const outerVerticalSquares = outerLeftSide.concat(outerRightSide);
  const outerHorizonalSquares = outerTopSide.concat(outerBotSide);
  const outerSquares = outerVerticalSquares.concat(outerHorizonalSquares);

  // Black Squares

  let leftSideWallArray = [];
  let rightSideWallArray = [];
  let topSideWallArray = [];
  let botSideWallArray = [];

  for (let leftSideWall = 41 + y + x; leftSideWall < 941 - x; leftSideWall += 40) {
    leftSideWallArray.push(leftSideWall);
  }
  for (let rightSideWall = 78 - y + x; rightSideWall < 978 - x; rightSideWall += 40) {
    rightSideWallArray.push(rightSideWall);
  }

  for (let topSideWall = 42 + x + y; topSideWall < 78 + x - y; topSideWall++) {
    topSideWallArray.push(topSideWall);
  }

  for (let botSideWall = 922 - x + y; botSideWall < 958 - x - y; botSideWall++) {
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
      <Square black={black} pos={i} walls={WallArrays} outerSquares={outerSquares}>{renderPiece(i)}</Square>
    </div>
  );
};

const renderPiece = (i, itemPosition) => {
  if (i === itemPosition) {
    return <DragAndDropItems role='entrance' />
  }
};

export default function RoomTemplate() {

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
