import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expense(props) {
  const data = props.data;
  return (
    <div className="expenses">
      {data.map((props) => {
        return (
          <ExpenseItem
            key={props.id}
            title={props.title}
            amount={props.amount}
            date={props.date}
          />
        );
      })}
    </div>
  );
}

export default Expense;
