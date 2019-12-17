import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadarChart, RadialChart } from 'react-vis';

import './GraphContainer.scss';

const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

const GraphContainer = () => {
  return (
    <div id="graph-container">
      <RadialChart
        data={myData}
        width={150}
        height={150} />
    </div>
  );
};

export default GraphContainer;