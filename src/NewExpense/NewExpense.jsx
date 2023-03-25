import React, { useState } from 'react'
import NewExpenseForm from './NewExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {
    const handleExpenseData = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData ,
            id: Math.random().toString()
        }

        props.onAddExpenseData(expenseData)
    }
  return (
    <div className='new-expense'>
        <NewExpenseForm
          onSubmitExpenseData={handleExpenseData}
        />
    </div>
  )
}

export default NewExpense