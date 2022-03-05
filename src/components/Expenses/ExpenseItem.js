import React from "react";

export const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 22 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$588</div>
      </div>
    </div>
  );
};
