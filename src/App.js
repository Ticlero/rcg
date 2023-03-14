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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense data={expense} />
    </div>
  );
};

export default App;
