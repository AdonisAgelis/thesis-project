import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import '../styles/carouselGraph.css';

const VisitorsDoughnutGraph = props => {
  const data = {
    labels: ['School', 'Family', 'Other'],
    datasets: [
      {
        data: [props.schoolCounter, props.familyCounter, props.otherCounter],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="header">
        <div className="links"></div>
      </div>
      <Doughnut
        className="doughnut"
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default VisitorsDoughnutGraph;
