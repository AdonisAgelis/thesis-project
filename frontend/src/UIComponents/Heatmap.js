import React from 'react';
import HeatMap from 'react-heatmap-grid';

const Heatmap = props => {
  const xLabels = Array(props.rangeX).fill('');
  const yLabels = Array(props.rangeY).fill('');

  const finalGroupMovementCoords = props.finalGroupMovementCoords;
  const numberOfVisitorsPerGroup = props.numberOfVisitorsPerGroup;

  // console.log(finalGroupMovementCoords);
  // console.log(numberOfVisitorsPerGroup);

  const data = Array(props.rangeY)
    .fill()
    .map(() => Array(props.rangeX).fill(0));

  // Filling data array with movement coords to display Heatmap
  // For each group that gets simulated we find the number of visitors
  for (let i = 0; i < finalGroupMovementCoords.length; i++) {
    for (let y = 0; y < finalGroupMovementCoords[i].length; y++) {
      data[finalGroupMovementCoords[i][y][1] - 1][
        finalGroupMovementCoords[i][y][0] - 1
      ] += numberOfVisitorsPerGroup[i];
    }
  }

  return (
    <div className="heatmap" style={{ fontSize: '13px' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={'bottom'}
        xLabelWidth={60}
        data={data}
        squares
        height={39}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(235, 64, 52, ${1 - (max - value) / (max - min)})`,
          fontSize: '12px',
          color: '#444',
        })}
        cellRender={value => value && <div>{value}</div>}
      />
    </div>
  );
};

export default Heatmap;
