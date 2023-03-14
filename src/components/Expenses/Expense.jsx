import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

const Expense = (props) => {
  const data = props.data;
  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default Expense;
