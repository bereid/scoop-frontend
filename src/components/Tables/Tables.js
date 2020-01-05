import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import ColoredIcons from '../ColoredIcons';

import './Tables.scss';

const Tables = (props) => {
  const { expenses } = props;

  const [expandedTables, setExpandedTable] = useState([]);

  const expandTable = (table) => {
    let openTables = [...expandedTables];
    openTables.includes(table) ? openTables.splice(openTables.indexOf(table), 1) : openTables.push(table);
    setExpandedTable(openTables)
  }

  const table = (group) => {
    const filteredExpenses = expenses.filter(expense => expense.group === group);
  
    return (
      <div className="table">
        <div className="table-header" onClick={() => expandTable(group)}>
          <ColoredIcons>{expandedTables.includes(group) ? <MdExpandLess /> : <MdExpandMore />}</ColoredIcons>
        </div>
        <div className={"table-content " + (expandedTables.includes(group) ? "opened" : "")}>
          {filteredExpenses.map(expense => (
            <div className="table-row" key={expense._id}>
              <div className="cell icon"><ColoredIcons><MdCheckBoxOutlineBlank /></ColoredIcons></div>
              <div className="cell growing">{expense.name}</div>
              <div className="cell wider">{expense.price} HUF</div>
              <div className="cell icon"><ColoredIcons><MdDelete /></ColoredIcons></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="table-container">
      {table("bills")}
      {table("cap")}
      {table("else")}
    </div >
  );
};

export default Tables;