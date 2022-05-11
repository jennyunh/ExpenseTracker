import Expenses from "./components/ExpenseSection/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React, { useState } from "react";


const INITIALexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {
  const [thisDataYear, setDataYear] = useState(null);


  const [expenses, setExpenses] = useState(INITIALexpenses);

  const fetchExpenseData = (data) => {
    let dataCopy = {
      ...data,
      id: Math.random().toString(),
    };



    //add new expense to existing expenses
  
setExpenses(prevExpenses => {return [dataCopy, ...prevExpenses]});

  
    //get date object
    let date = dataCopy.date;

    //year is of type number
    let year = date.getFullYear();

    setDataYear(year);
  };





  



  return (
    <div>
      <NewExpenses saveExpenseData={fetchExpenseData} />
      <Expenses year={thisDataYear} list={expenses} />
    </div>
  );
}

export default App;
