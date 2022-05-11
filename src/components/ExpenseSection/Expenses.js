import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

/*Props passed from app.js */
function Expenses(props) {
  //selected year in the filter dropdown
  const [selectedYear, setSelectedYear] = useState(2020);

  //filtered list.
  const filteredExpenses = props.list.filter(
    (ele) => ele.date.getYear() + 1900 === Number(selectedYear)
  );

  function filterHandler(e) {
    let pickedYear = e.target.value;
    setSelectedYear(pickedYear);
  }



  return (
    <div className="expenses">
      <ExpensesFilter
        year={props.year}
        selectedYear={props.selectedYear}
        filterhandler={filterHandler}
      />

<ExpensesChart expenses={filteredExpenses}/>

   <ExpensesList filteredExpenses={filteredExpenses}/>

    </div>
  );
}

export default Expenses;
