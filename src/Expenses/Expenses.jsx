import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseYearFilter from './ExpenseYearFilter'
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear , setFilteredYear] = useState("2021");

    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear)
    }

    const filterExpenses = props.items.filter((expenseList) => {
        return expenseList.date.getFullYear().toString() === filteredYear;
    })

  return (
    <Card className="expenses">
        <ExpenseYearFilter
          selected={filteredYear}
          onChangeExpenseYear={filterChangeHandler}
        />
        <ExpenseChart expense={filterExpenses}/>
        <ExpenseList items={filterExpenses}/>
    </Card>
  )
}

export default Expenses