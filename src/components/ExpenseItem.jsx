import "./ExpenseItem.css";

// const expenseDate = new Date(2022, 7, 25);
// const expenseTitle = `Car Insurance`;
// const expenseAmaount = 294.37;

function ExpenseItem(props) {
  console.log(props);
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
