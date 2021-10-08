import React from 'react';
import { useSelector } from 'react-redux';

import CarouselGraphPage from './CarouselGraphPage';

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
  let totalExhibits;

  for (let i = 0; i < graphs.length; i++) {
    if (graphs[i].roomID === clickedRoomID) {
      currentRoom = graphs[i];
      totalExhibits = currentRoom.totalExhibits;
    }
  }

  // Find collective totalAttractionPower and totalRevisitingPower for the same room
  let attractionPower = Array(currentRoom.totalAttractionPower.length).fill(0);
  let revisitingPower = Array(currentRoom.totalRevisitingPower.length).fill(0);
  // Find all the exhibits that got visited in different simulations for the same room
  let totalExhibitsVisited = [];
  // Find types of visitors
  let schoolCounter = 0;
  let familyCounter = 0;
  let otherCounter = 0;
  // Find total visitors
  let totalVisitors = 0;

  for (let i = 0; i < graphs.length; i++) {
    if (currentRoom.roomID === graphs[i].roomID) {
      for (let y = 0; y < currentRoom.totalAttractionPower.length; y++) {
        attractionPower[y] += graphs[i].totalAttractionPower[y];
        revisitingPower[y] += graphs[i].totalRevisitingPower[y];
      }
      for (let z = 0; z < graphs[i].arrayOfSimulations.length; z++) {
        totalExhibitsVisited = totalExhibitsVisited.concat(
          graphs[i].arrayOfSimulations[z].exhibitsVisited
        );
        switch (graphs[i].arrayOfSimulations[z].typeOfVisitors) {
          case 'School':
            schoolCounter += graphs[i].arrayOfSimulations[z].numberOfVisitors;
            break;
          case 'Family':
            familyCounter += graphs[i].arrayOfSimulations[z].numberOfVisitors;
            break;
          case 'Other':
            otherCounter += graphs[i].arrayOfSimulations[z].numberOfVisitors;
            break;
          default:
            break;
        }
      }
      totalExhibitsVisited = [...new Set(totalExhibitsVisited)];
      totalExhibitsVisited.sort((a, b) => a - b);
      totalVisitors += graphs[i].totalVisitors;
    }
  }

  console.log(`The attraction is: ${attractionPower}`);
  console.log(`The revisting is: ${revisitingPower}`);
  console.log(`The total Exhibits visited are: ${totalExhibitsVisited}`);
  console.log(`There are ${schoolCounter} School`);
  console.log(`There are ${familyCounter} Family`);
  console.log(`There are ${otherCounter} Other`);
  console.log(`The total visitors are: ${totalVisitors}`);

  // for (const prop of Object.getOwnPropertyNames(currentRoom)) {
  //   delete currentRoom[prop];
  // }

  return (
    <CarouselGraphPage
      attractionPower={attractionPower}
      revisitingPower={revisitingPower}
      totalExhibits={totalExhibits}
      totalExhibitsVisited={totalExhibitsVisited}
      schoolCounter={schoolCounter}
      familyCounter={familyCounter}
      otherCounter={otherCounter}
      totalVisitors={totalVisitors}
    />
  );
};

export default Graphs;
