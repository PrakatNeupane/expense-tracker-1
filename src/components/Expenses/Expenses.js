import React, { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} changeDate={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>

  );
};
