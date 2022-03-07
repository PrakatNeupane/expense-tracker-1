import React, { useState } from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";

export const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)
  console.log('State reevaluated');

  const clickHandler = () => {
    setTitle('updated');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click me</button>
      </div>
    </Card>
  );
};
