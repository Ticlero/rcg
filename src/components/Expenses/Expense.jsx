import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

import "./Expense.css";

const Expense = (props) => {
  const data = props.data;
  const [selectedYear, setSelectedYear] = useState("2023");

  const onSaveSelectedYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpensesData = data.filter((expense) => {
    return (
      expense.date
        .toLocaleString("ko-KR", { year: "numeric" })
        .toString()
        .slice(0, 4) === selectedYear
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onSaveSelectedYear={onSaveSelectedYear}
        ></ExpenseFilter>
        <ExpenseChart expenses={filteredExpensesData}></ExpenseChart>
        <ExpenseList items={filteredExpensesData}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expense;
