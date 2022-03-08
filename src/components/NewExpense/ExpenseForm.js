import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState();
  // const [enteredAmount, setEnteredAmount] = useState();
  // const [enteredDate, setEnteredDate] = useState();

  const [userInput, setUserInput] = useState(
    {
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    }
  )

  // when your state update depends on your previous state, you need to use useState function with prevstate parameter and then make changes

  const titleChangeHandler = (e) => {
    setUserInput((prevstate) => { return { ...userInput, enteredTitle: e.target.event, } }
    )
  }
  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.event,
    })
  }
  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredDate: e.target.event,
    })
  }



  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min={0.01} step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="text" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
