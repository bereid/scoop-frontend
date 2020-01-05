import React from 'react';
import { IconContext } from "react-icons";

import './ColoredIcons.scss';

const iconColor = "#12343b";

const ColoredIcons = (props) => (
  <IconContext.Provider value={{ color: iconColor }}>
    {props.children}
  </IconContext.Provider>
);

export default ColoredIcons;