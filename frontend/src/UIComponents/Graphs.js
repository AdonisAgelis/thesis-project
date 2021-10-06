import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/graphs.css';

const Graphs = props => {
  const graphs = props.graphData;
  console.log(graphs);

  // Find _id of clicked room from LoadPagination
  const clickedRoomID = useSelector(
    state => state.extractPositionReducer.roomId
  );
  // Find data of clicked room
  let currentRoom;

  for (let i = 0; i < graphs.length; i++) {
    if (graphs[i].roomID === clickedRoomID) {
      currentRoom = graphs[i];
    }
  }

  // Find collective data for simulations that happen for the same room
  let attractionPower = Array(currentRoom.totalAttractionPower.length).fill(0);
  let revisitingPower = Array(currentRoom.totalRevisitingPower.length).fill(0);

  for (let i = 0; i < graphs.length; i++) {
    if (currentRoom.roomID === graphs[i].roomID) {
      for (let y = 0; y < currentRoom.totalAttractionPower.length; y++) {
        attractionPower[y] += graphs[i].totalAttractionPower[y];
        revisitingPower[y] += graphs[i].totalRevisitingPower[y];
      }
    }
  }

  console.log(`The attraction is: ${attractionPower}`);
  console.log(`The revisting is: ${revisitingPower}`);

  return (
    <div>
      <h1>{currentRoom.nameOfRoom} Graphs</h1>
    </div>
  );
};

export default Graphs;

// Array(roomData.exhibit.length).fill(0)
