import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div id="header">
      <div className="logo"><NavLink to='/' exact={true}>scoop</NavLink></div>
    </div>
  );
};

export default Header;