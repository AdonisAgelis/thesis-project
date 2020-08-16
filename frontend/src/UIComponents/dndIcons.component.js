import React, { useState } from "react";
import { DnDItemTypes } from "../dndItemTypes";
import { useDrag } from "react-dnd";
import {
  extractValidDropColorForEntranceExit,
  extractValidDropColorForElse,
} from "../actions";
import "../styles/profile.css";
import { MDBIcon } from "mdbreact";
import { useDispatch } from "react-redux";

const DnDIcons = (props) => {
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

  const dispatch = useDispatch();

  if (roleProp.role === "entrance") {
    return (
      <div
        ref={drag}
        className="draggableIcons"
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
        onDrag={() => {
          dispatch(extractValidDropColorForEntranceExit());
        }}
      >
        <MDBIcon icon="door-open" />
      </div>
    );
  } else if (roleProp.role === "wall") {
    return (
      <div
        className="draggableIcons"
        onDrag={() => {
          dispatch(extractValidDropColorForElse());
        }}
      >
        <MDBIcon icon="door-open" />
      </div>
    );
  } else if (roleProp.role === "accessPoint") {
    return (
      <div
        ref={dragAP}
        className="draggableIcons"
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
        className="draggableIcons"
        onDrag={() => {
          dispatch(extractValidDropColorForElse());
        }}
      >
        <MDBIcon icon="university" />
      </div>
    );
  }
};

export default DnDIcons;
