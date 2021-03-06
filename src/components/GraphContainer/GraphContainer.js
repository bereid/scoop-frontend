import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import * as chartFunctions from '../../helpers/chartFunctions';

import './GraphContainer.scss';


const GraphContainer = (props) => {
  const { expenses } = props;
  return (
    <div id="graph-container">
      <div className="graph-box">
        <Pie
          data={chartFunctions.pieData(expenses)}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Type of expenses in actual month',
              fontSize: 14
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
      <div className="graph-box">
        <Bar
          data={chartFunctions.barData(expenses)}
          height={200}
          options={{
            title:{
              maintainAspectRatio: false,
              display:true,
              text:'Planned/actual expenses',
              fontSize:14
            },
            legend:{
              display: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default GraphContainer;