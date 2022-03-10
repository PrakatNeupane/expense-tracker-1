import React, { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  let expensesContent = <p>No content found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} changeDate={filterChangeHandler} />
      {expensesContent}
    </Card>

  );
};
