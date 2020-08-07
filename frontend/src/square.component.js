import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import DnDIcons from "./dndIcons.component";

export default function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  // const [itemProp, setItemProp] = useState(props);
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "20px",
        height: "20px",
      }}
    >
      {children}
    </div>
  );
}
