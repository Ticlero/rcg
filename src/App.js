import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";

const App = () => {
  const expense = [
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
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense data={expense} />
    </div>
  );
};

export default App;
