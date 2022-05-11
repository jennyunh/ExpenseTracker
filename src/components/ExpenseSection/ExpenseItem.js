import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";


// eslint-disable-next-line no-lone-blocks
{/* Prop passed from Parent Expenses */}
function ExpenseItem(props) {

const clickHandler = () => {
  console.log("hi")
}


  return (

    <li>
    <div className="expense-item">

<ExpenseDate date={props.date} title={props.title} amount={props.amount}/>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>


<button onClick={clickHandler}>Change Title</button>

    </div>
    </li>
  );
}

export default ExpenseItem;
