import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isClicked, setClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const onClickHandler = (event) => {
    setClicked(true);
  };

  let showContents = <button onClick={onClickHandler}>Add New Expense</button>;

  if (isClicked === true) {
    showContents = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        setClicked={setClicked}
      ></ExpenseForm>
    );
  }

  return (
    <div className="new-expense">
      {showContents}
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm> */}
    </div>
  );
};
export default NewExpense;
