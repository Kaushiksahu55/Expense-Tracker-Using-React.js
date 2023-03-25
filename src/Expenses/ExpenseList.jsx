import React from 'react'
import ExpenseItems from './ExpenseItems';
import "./ExpenseList.css"

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
  }

  return (
    <div className='expense-list'>
        {props.items.map((expenseItem) => {
           return <ExpenseItems
              key={expenseItem.id}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
        })}
    </div>
  )
}

export default ExpenseList