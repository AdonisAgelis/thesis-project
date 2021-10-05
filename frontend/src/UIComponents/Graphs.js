import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/graphs.css';

const Graphs = props => {
  const graphs = props.graphData;
  console.log(graphs);

  const clickedRoomID = useSelector(
    state => state.extractPositionReducer.roomId
  );

  console.log(`This is the clicked room id: ${clickedRoomID}`);

  return (
    <div>
      <h1>Hello Graphs</h1>
    </div>
  );
};

export default Graphs;
