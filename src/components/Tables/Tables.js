import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import ColoredIcons from '../ColoredIcons';

import './Tables.scss';

const Tables = (props) => {
  const { expenses } = props;
  console.log(expenses);

  const [expandedTable, setExpandedTable] = useState([]);

  const expandTable = (table) => {
    let openTables = [...expandedTable];
    openTables.includes(table) ? openTables.splice(openTables.indexOf(table), 1) : openTables.push(table);
    setExpandedTable(openTables)
  }

  console.log(expandedTable)
  return (
    <div className="table-container">
      <div className="table-header" onClick={() => expandTable("bills")}>
        <ColoredIcons>
          {expandedTable.includes("bills") ? <MdExpandLess /> : <MdExpandMore />}
        </ColoredIcons>
        Bills
        </div>
      <div className="table-header" onClick={() => expandTable("caps")}>
        <ColoredIcons>
          {expandedTable.includes("caps") ? <MdExpandLess /> : <MdExpandMore />}
        </ColoredIcons>
        Expense caps
        </div>
      <div className="table-header" onClick={() => expandTable("else")}>
        <ColoredIcons>
          {expandedTable.includes("else") ? <MdExpandLess /> : <MdExpandMore />}
        </ColoredIcons>
        Else
        </div>
    </div >
  );
};

export default Tables;