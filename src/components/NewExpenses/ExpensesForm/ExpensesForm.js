import "./ExpensesForm.css";
import React, {useState} from "react";


function ExpensesForm(props) {

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');
const [formOn, setFormOn] = useState(false);

const titleHandler = (e) => {
    let input = e.target.value;
    setEnteredTitle(input);
}        

const amountHandler = (e) => {
    let input = e.target.value;
    setEnteredAmount(input);
}        

const dateHandler = (e) => {
    let input = e.target.value;
    setEnteredDate(input);
}        

const submitHandler = (e) => {
e.preventDefault();

//Gather all form data info into an object
const expenseData = {
    title: enteredTitle,
    amount: 
    +enteredAmount,
    /*Parse the entered date string into a date object. */
    date: new Date(enteredDate + " 00:00")
}


//Send data to parent component NewExpenses.js
props.saveExpenseData(expenseData)


//reset the form
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
}

//When cancel button clicked, toggle form
const cancelHandler = () => {
setFormOn(!formOn)
}

if (formOn === false) {
return <button onClick={cancelHandler}>Add Expense</button>
}

  return (

    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} type="text" onChange={titleHandler}/>
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountHandler}/>
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} type="date" min="2021-01-01" max="2024-01-01" onChange={dateHandler}/>
        </div>
      </div>

<div className="new-expense__actions">
<button type="submit">Add Expense</button>
<button onClick={cancelHandler}>Cancel</button>


</div>

    </form>
  );
}

export default ExpensesForm;
