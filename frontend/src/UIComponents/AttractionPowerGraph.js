import React from 'react';
import { Bar } from 'react-chartjs-2';

import '../styles/carouselGraph.css';

const AttractionPowerGraph = props => {
  const data = {
    labels: props.totalExhibits,
    datasets: [
      {
        label: 'Number of visitors that were attracted by an exhibit',
        data: props.attractionPower,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default AttractionPowerGraph;
