import React from 'react';

import Loader from '../Loader';

import './Tables.scss';

const Tables = (props) => {
  const { expenses } = props;
  console.log(expenses)
  if (expenses.length === 0) return <Loader />
  return (
    <div className="table-container">
      <div className="table">helo táblázat</div>
    </div>
  );
};

export default Tables;