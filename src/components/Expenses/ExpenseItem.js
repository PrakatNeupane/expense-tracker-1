import React from "react";

export const ExpenseItem = () => {
  const expenseItem = "Car insurance";
  const expenseDate = new Date();
  const expenseAmount = 333;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
