import React, { useState } from 'react'
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
    const [expenseTitle , setExpenseTitle] = useState("");
    const [expenseAmount , setExpenseAmount] = useState("");
    const [expenseDate , setExpenseDate] = useState("");

    function handleExpenseTitle(event){
        setExpenseTitle(event.target.value);
    }

    function handleExpenseAmount(event){
        setExpenseAmount(event.target.value);
    }

    function handleExpenseDate(event){
        setExpenseDate(event.target.value);
    }

    function submitExpenseData(event) {
        event.preventDefault();

        const expenseData = {
            title: expenseTitle,
            amount: expenseAmount,
            date: new Date(expenseDate)
        };

        props.onSubmitExpenseData(expenseData);

        setExpenseTitle("");
        setExpenseAmount("");
        setExpenseDate("");
    }
  return (
    <form onSubmit={submitExpenseData}>
        <h3>You Can Add Your Expense Here!</h3>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                  type="text"
                  value={expenseTitle}
                  onChange={handleExpenseTitle}
                />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input
                  type="number"
                  value={expenseAmount}
                  onChange={handleExpenseAmount}
                />
            </div>

            <div className="new-expense__control">
                <label>date</label>
                <input
                  type="date"
                  value={expenseDate}
                  onChange={handleExpenseDate}
                />
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default NewExpenseForm