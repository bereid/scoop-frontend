import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import AddButton from '../AddButton';

import './Sidebar.scss';

const Sidebar = (props) => {
  console.log(props)
  return (
    <div id="sidebar">
      <div className="nav-menu">
        <NavLink to='/' exact={true}>Home</NavLink>
        <NavLink to='/incomes'>Incomes & Future Plans</NavLink>
        <NavLink to='/expenses' >Expenses</NavLink>
      </div>
      <AddButton />
    </div>
  );
};

export default withRouter(Sidebar);