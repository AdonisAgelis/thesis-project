import React from 'react';
import HeatMap from 'react-heatmap-grid';

const Heatmap = props => {
  const xLabels = Array(props.rangeX).fill('');
  const yLabels = Array(props.rangeY).fill('');

  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

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
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
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
