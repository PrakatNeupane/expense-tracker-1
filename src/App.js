import React from 'react'; // You can simply import this in all the files with JSX code just so that you remember what happens behind the hood 
import { Expenses } from './components/Expenses/Expenses';

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
    <Expenses expenses={expenses} />
  )
}
export default App;