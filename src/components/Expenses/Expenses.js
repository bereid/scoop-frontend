import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loader from '../Loader';
import GraphContainer from '../GraphContainer';
import Tables from '../Tables';

import './Expenses.scss';

const Expenses = () => {
  
  const [ expenses, setExpenses ] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:4444/expenses')
    .then(response => {
      setExpenses(response.data)
    })
    .catch(e => console.log(e));
  }, []);
  
  if (expenses.length === 0) return <Loader />

  return (
    <div id="expenses-container">
      <GraphContainer />
      <Tables expenses={expenses} />
    </div>
  );
};

export default Expenses;