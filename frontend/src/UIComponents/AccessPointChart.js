import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

import '../styles/carouselGraph.css';

const AccessPointChart = props => {
  const totalAccessPoints = props.totalAccessPoints;
  const accessPointConnections = props.userPerAccessPointConnection;

  // console.log(totalAccessPoints);
  // console.log(accessPointConnections);

  //   const stringTotalAccessPoints = totalAccessPoints.toString();
  //   const readyTotalAccessPoints = stringTotalAccessPoints.split(',');

  const data = {
    labels: totalAccessPoints,
    datasets: [
      {
        label: 'Number of visitors connected per Access Point',
        data: accessPointConnections,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <div className="header">
        <div className="links"></div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AccessPointChart;
