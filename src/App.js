import React, { useState } from 'react'; // You can simply import this in all the files with JSX code just so that you remember what happens behind the hood 
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car insurance',
    date: new Date('2021/4/5'),
    amount: 450,
  },
  {
    id: 'e2',
    title: 'Toilet paper',
    date: new Date('2020/5/6'),
    amount: 450,
  },
  {
    id: 'e3',
    title: 'Car fun',
    date: new Date('2019/9/4'),
    amount: 450,
  },
  {
    id: 'e4',
    title: 'food insurance',
    date: new Date('2022/1/2'),
    amount: 450,
  },

]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  // here our state is depending on the previous state as well
  // meaning we want some data already displayed on the expenses list
  // so initiall the state value is the static dummy data and we depend on this data as well
  // instead of doing setExpenses[expense, ...expenses], we do the following
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses]
    })
  }

  return (
    <div>
      {/* taking in the form data */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/* displaying the received data */}
      <Expenses items={expenses} />
    </div>

  )
}
export default App;