import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
