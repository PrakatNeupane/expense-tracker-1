import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  // const [userInput, setUserInput] = useState(
  //   {
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   }
  // )

  // when your state update depends on your previous state, you need to use useState function with prevstate parameter and then make changes

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
    // setUserInput((prevstate) => { return { ...userInput, enteredTitle: e.target.event, } }
    // )
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.event,
    // })
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.event,
    // })
  }


  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData);

    // to clear the input fields after submission - two way binding
    setEnteredAmount('')
    setEnteredTitle('')
    setEnteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enteredAmount} type="number" min={0.01} step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} type="date" min="2019/01/01" max="2022/12/31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
