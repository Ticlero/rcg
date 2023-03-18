import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //props.title은 현재의 값이고, title에 저장된다.
  //title을 변경하기 위해 setTitle함수를 사용한다. 그러면 변경되는 해당 컴포넌트를 호출해 새로운 값으로 업데이트한다.
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated!!");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
