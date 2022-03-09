import React, { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(filteredYear);
  }
  return (

    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} changeDate={filterChangeHandler}></ExpensesFilter>
      <ExpenseItem
        title={items[0].title}
        date={items[0].date}
        amount={items[0].amount}
      />
      <ExpenseItem
        title={items[1].title}
        date={items[1].date}
        amount={items[1].amount}
      />
      <ExpenseItem
        title={items[2].title}
        date={items[2].date}
        amount={items[2].amount}
      />
      <ExpenseItem
        title={items[3].title}
        date={items[3].date}
        amount={items[3].amount}
      />
    </Card>

  );
};
