import React from 'react';

import GraphContainer from '../GraphContainer';
import Tables from '../Tables';

import './Expenses.scss';

const Expenses = () => {
  return (
    <div id="expenses-container">
      <GraphContainer />
      <Tables />
    </div>
  );
};

export default Expenses;