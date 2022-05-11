import './NewExpenses.css';
import ExpensesForm from './ExpensesForm/ExpensesForm';

function NewExpenses(props) {


//function to send to child component (ExpensesForm.js)
const fetchExpenseData = (data) => {

    let dataCopy = {
        ...data,
        id: Math.random().toString()
    }

//send data up to parent (app.js)
    props.saveExpenseData(dataCopy)

}


return (

<div className="new-expense">

<ExpensesForm saveExpenseData={fetchExpenseData}/>

</div>

)



}

export default NewExpenses