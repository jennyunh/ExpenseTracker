import React from "react";

import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

/* NEW KNOWLEDGE
Shortened ternary expression form: 
Some condition && desired return value if condition is met.

When there is no expenses for a chosen filtered year, return "no expenses found" EXAMPLE:
{filteredExpenses.length === 0 && <p> NO EXPENSES FOUND. </p>}
*/

const ExpensesList = (props) => {
  /* NEW KNOWLEDGE: jsx html can be stored in variables
  
  example:   
  let expensesContent = <p>No Expenses found.</p>;*/

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((ele) => (
        <ExpenseItem
          key={ele.id}
          date={ele.date}
          title={ele.title}
          amount={ele.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
