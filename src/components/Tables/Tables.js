import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess, MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
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

  const [ checked, setCheck ] = useState([]);
  const checking = (row) => {
    let checkedRow = [...checked];
    checkedRow.includes(row) ? checkedRow.splice(checkedRow.indexOf(row), 1) : checkedRow.push(row);
    setCheck(checkedRow)
  }

  const table = (group) => {
    const filteredExpenses = expenses.filter(expense => expense.group === group);
    const tableNames = {
      bills: "Bills",
      cap: "Expense caps",
      else: "Other expenses"
    }
  
    return (
      <div className="table">
        <div className="table-header" onClick={() => expandTable(group)}>
          <ColoredIcons>{expandedTables.includes(group) ? <MdExpandLess /> : <MdExpandMore />}</ColoredIcons>
          {tableNames[group]}
        </div>
        <div className={"table-content " + (expandedTables.includes(group) ? "opened" : "")}>
          {filteredExpenses.map(expense => (
            <div className="table-row" key={expense._id}>
              <div className="cell icon" onClick={()=>checking(expense._id)}><ColoredIcons>{checked.includes(expense._id) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</ColoredIcons></div>
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