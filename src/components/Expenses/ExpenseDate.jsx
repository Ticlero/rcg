import "./ExpenseDate.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("ko-KR", { month: "2-digit" });
  const year = props.date.toLocaleString("ko-KR", { year: "2-digit" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseItem;
