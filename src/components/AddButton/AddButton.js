import React, { useState } from 'react';
import { MdAddCircle, MdAddShoppingCart } from "react-icons/md";
import { GiWallet } from "react-icons/gi";

import './AddButton.scss';

const AddButton = () => {
  return (
    <div className="add-button">
      <div class="ab-grid-container">
        <div class="ab-grid-separator1"></div>
        <div class="ab-grid-section1"><MdAddShoppingCart /></div>
        <div class="ab-grid-separator2"></div>
        <div class="ab-grid-section2"><GiWallet /></div>
        <div class="ab-grid-separator3"></div>
        <div class="ab-grid-separator4"></div>
      </div>
      <MdAddCircle className="add"/>
    </div>
  )
};

export default AddButton;