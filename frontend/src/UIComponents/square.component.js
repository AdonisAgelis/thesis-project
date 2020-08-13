import React from "react";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrop } from 'react-dnd';
import { extractEntrancePosition, extractExitPosition, extractTypeOfDraggable } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import DnDIcons from "./dndIcons.component";

import "../styles/profile.css";

export default function Square({ black, pos, walls }) {
  const fill = black ? "rgba(40, 40, 40, 0.1)" : "white";
  const stroke = "black"; /*? "white" : "grey"*/
  const dispatch = useDispatch();
  let headButt = useSelector(state => state.extractPositionReducer.entrance);
  let ejected = useSelector(state => state.extractPositionReducer.exit);
  let typeOfDraggable =  useSelector(state => state.extractTypeOfDraggableReducer);

  // console.log(typeOfDraggable);

  const extractTargetId = (x, item) => {
    if (item.type === 'entrance') {
      dispatch(extractTypeOfDraggable(item.type))
      dispatch(extractEntrancePosition(x));
    } else if (item.type === 'exit') {
      dispatch(extractTypeOfDraggable(item.type))
      dispatch(extractExitPosition(x));
    }
    return { id: x }
  };

  const [{ isOver }, drop] = useDrop({
    accept: [DnDItemTypes.ENTRANCE, DnDItemTypes.EXIT],
    drop: (item, monitor) => extractTargetId(monitor.targetId, item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });

  let bg = isOver ? 'yellow' : fill;

  if (pos !== headButt && pos !== ejected && fill === 'rgba(40, 40, 40, 0.1)') {
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
  } else if (pos !== headButt && pos !== ejected && fill === 'white') {
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
  // else if (x) {
  //   console.log('Ent1');
  //     if (x && y === false) {
  //       console.log('Ent2');
  //       return <DnDIcons role='entrance' />
  //     } else if (x && y) {
  //       console.log('Ent3');
  //       y = false;
  //       return <DnDIcons role='exit' />
  //     }
  // } else if (y) {
  //   console.log('Ex1');
  //     if (y && x) {
  //       console.log('Ex2');
  //       return <DnDIcons role='entrance' />
  //     } else if (y && !x) {
  //       console.log('Ex3');
  //       return <DnDIcons role='exit' />
  //     }
  // }
}
