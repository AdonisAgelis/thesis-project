import React from 'react';
import HeatMap from 'react-heatmap-grid';

const Heatmap = props => {
  const xLabels = Array(props.rangeX).fill('');
  const yLabels = Array(props.rangeY).fill('');

  const finalGroupMovementCoords = props.finalGroupMovementCoords;
  const numberOfVisitorsPerGroup = props.numberOfVisitorsPerGroup;

  // console.log(props.rangeX);
  // console.log(props.rangeY);
  // console.log(finalGroupMovementCoords);
  // console.log(numberOfVisitorsPerGroup);

  const defineCellHeight = (x, y) => {
    let height;
    let multiply = x * y;
    if (multiply < 155) {
      height = 40;
    } else if (multiply < 290) {
      height = 37;
    } else if (multiply < 360) {
      height = 35;
    } else if (multiply < 460) {
      height = 32;
    } else if (multiply < 550) {
      height = 28;
    } else if (multiply < 760) {
      height = 23;
    } else {
      height = 36;
    }

    return height;
  };

  let cellHeight = defineCellHeight(props.rangeX, props.rangeY);

  const data = Array(props.rangeY)
    .fill()
    .map(() => Array(props.rangeX).fill(0));

  // Avoid app crash
  if (!finalGroupMovementCoords) {
    return <div></div>;
  }
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
        xLabelWidth={0}
        yLabelWidth={0}
        data={data}
        squares
        height={cellHeight}
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
