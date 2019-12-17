import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

import './core.scss';

const Layout = (props) => {
  return (
    <div id="app-container">
      <Header />
      <Sidebar />
      <div id="content-container">{props.children}</div> 
    </div>
  );
}

export default Layout;
