import React from 'react'; // You can simply import this in all the files with JSX code just so that you remember what happens behind the hood 
import { ExpenseItem } from './components/Expenses/ExpenseItem';
import './components/Expenses/ExpenseItem.css'

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Car insurance',
      date: new Date(),
      amount: 450,
    },
    {
      id: 'e2',
      title: 'Toilet paper',
      date: new Date(),
      amount: 450,
    },
    {
      id: 'e3',
      title: 'Car fun',
      date: new Date(),
      amount: 450,
    },
    {
      id: 'e4',
      title: 'food insurance',
      date: new Date(),
      amount: 450,
    },
    {
      id: 'e5',
      title: 'Car insurance',
      date: new Date(),
      amount: 450,
    }
  ]

  return (
    <div>
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} />
      <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount} />
    </div>
  )
}
export default App;