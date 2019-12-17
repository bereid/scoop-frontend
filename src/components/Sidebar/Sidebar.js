import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <NavLink to='/' exact={true}>Home</NavLink>
      <NavLink to='/incomes'>Incomes</NavLink>
      <NavLink to='/expenses' >Expenses</NavLink>
    </div>
  );
};

export default Sidebar;