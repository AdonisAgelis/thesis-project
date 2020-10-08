import React, { useState } from "react";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrag } from "react-dnd";
import {
  extractValidDropColorForEntranceExit,
  extractValidDropColorForElse,
} from "../actions";
import "../styles/workstation.css";
import { MDBIcon } from "mdbreact";
import { useDispatch } from "react-redux";

const DragAndDropItems = (props) => {
  const [roleProp, setRoleProp] = useState(props);
  let dndProp = roleProp.role.toUpperCase();

  const [{ isDragging }, drag] = useDrag({
    item: { type: DnDItemTypes.ENTRANCE },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isDraggingExit }, dragExit] = useDrag({
    item: { type: DnDItemTypes.EXIT },
    collect: (monitor) => ({
      isDraggingExit: !!monitor.isDragging(),
    }),
  });

  const [{ isDraggingAccessPoint }, dragAP] = useDrag({
    item: { type: DnDItemTypes.ACCESSPOINT },
    collect: (monitor) => ({
      isDraggingAccessPoint: !!monitor.isDragging(),
    }),
  });

  const [{ isDraggingExhibit }, dragExhibit] = useDrag({
    item: { type: DnDItemTypes.EXHIBIT },
    collect: (monitor) => ({
      isDraggingExhibit: !!monitor.isDragging(),
    }),
  });

  const [{ isDraggingWall }, dragWall] = useDrag({
    item: { type: DnDItemTypes.WALL },
    collect: (monitor) => ({
      isDraggingWall: !!monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  if (roleProp.role === "entrance") {
    return (
      <div
        ref={drag}
        className="draggableIcons"
        style={{ cursor: "move" }}
        onDrag={() => {
          dispatch(extractValidDropColorForEntranceExit());
        }}
      >
        <MDBIcon icon="door-closed" />
      </div>
    );
  } else if (roleProp.role === "exit") {
    return (
      <div
        ref={dragExit}
        className="draggableIcons"
        style={{ cursor: "move" }}
        onDrag={() => {
          dispatch(extractValidDropColorForEntranceExit());
        }}
      >
        <MDBIcon icon="door-open" />
      </div>
    );
  } else if (roleProp.role === "accessPoint") {
    return (
      <div
        ref={dragAP}
        className="draggableIconsInside"
        style={{ cursor: "move" }}
        onDrag={() => {
          dispatch(extractValidDropColorForElse());
        }}
      >
        <MDBIcon icon="wifi" />
      </div>
    );
  } else if (roleProp.role === "exhibit") {
    return (
      <div
        ref={dragExhibit}
        className="draggableIconsInside"
        style={{ cursor: "move" }}
        onDrag={() => {
          dispatch(extractValidDropColorForElse());
        }}
      >
        <MDBIcon icon="university" />
      </div>
    );
  } else if (roleProp.role === "wall") {
    return (
      <div
        ref={dragWall}
        className="draggableIconsWall"
        style={{ cursor: "move" }}
        onDrag={() => {
          dispatch(extractValidDropColorForElse());
        }}
      >
        <MDBIcon style={{ height: "20px" }} icon="square-full" />
      </div>
    );
  }
};

export default DragAndDropItems;
