import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";

const TEST_DATA = [
  {
    id: `e1`,
    title: `Car Insurance`,
    amount: 294.67,
    date: new Date(2022, 7, 25),
  },
  {
    id: `e2`,
    title: `Phone Bile`,
    amount: 110,
    date: new Date(2022, 6, 25),
  },
  {
    id: `e3`,
    title: `Delivery Food`,
    amount: 20,
    date: new Date(2022, 7, 20),
  },
  {
    id: `e4`,
    title: `A Book`,
    amount: 13.67,
    date: new Date(2023, 1, 25),
  },
  {
    id: `e5`,
    title: `Baby Book`,
    amount: 500.0,
    date: new Date(2023, 3, 10),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(TEST_DATA);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense data={expenses} />
    </div>
  );
};

export default App;
