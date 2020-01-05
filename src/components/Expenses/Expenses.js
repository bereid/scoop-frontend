import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loader from '../Loader';
import GraphContainer from '../GraphContainer';
import Tables from '../Tables';

import './Expenses.scss';

const Expenses = () => {
  
  const [ expenses, setExpenses ] = useState([]);
  const [ isArrived, setArrived ] = useState(false);
  useEffect(()=> {
    axios.get('http://localhost:4444/expenses')
    .then(response => {
      setExpenses(response.data)
      setArrived(true)
    })
    .catch(e => console.log(e));
  }, []);
  
  if (!isArrived) return <Loader />
  if (expenses.length === 0) return <h1>You have no expenses added yet!</h1>

  return (
    <div id="expenses-container">
      <GraphContainer expenses={expenses} />
      <Tables expenses={expenses} />
    </div>
  );
};

export default Expenses;