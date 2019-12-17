import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

import './core.scss';

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
    </div>
  );
}

export default Layout;
