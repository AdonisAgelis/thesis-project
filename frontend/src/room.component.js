import React, { useState } from "react";
import Square from "./square.component";
import DnDIcons from "./dndIcons.component";

const renderSquare = (i, [itemX, itemY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  // const black = (x + y) % 2 !== 1;
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
  const isItemHere = x === itemX && y === itemY;
  // const piece = isItemHere ? <DnDIcons role="entrance" /> : null;
  const piece = isItemHere ? null : null;

  return (
    <div key={i} style={{ width: "20px", height: "20px" }}>
      <Square black={black}>{piece}</Square>
    </div>
  );
};

export default function Room({ itemPosition }) {
  // const [roomProp, setRoomProp] = useState(props);

  const squares = [];
  for (let i = 0; i < 1000; i++) {
    squares.push(renderSquare(i, itemPosition));
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
