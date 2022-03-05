import React from "react";

export const ExpenseItem = ({ title, date, amount }) => {
  return (
    <div className="expense-item">
      <div>{title}</div>
      <div className="expense-item__description">
        <h2>{date}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};
