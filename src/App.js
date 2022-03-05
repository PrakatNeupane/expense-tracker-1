import React from 'react'; // You can simply import this in all the files with JSX code just so that you remember what happens behind the hood 
import { ExpenseItem } from './components/Expenses/ExpenseItem';
import './components/Expenses/ExpenseItem.css'

const App = () => {

  return (
    <div>
      <ExpenseItem />
    </div>
  )
}
export default App;