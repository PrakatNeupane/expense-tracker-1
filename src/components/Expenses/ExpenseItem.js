import React from "react";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>{props.title}</div>
      <div className="expense-item__description">
        <h2>{props.date.toISOString()}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};
