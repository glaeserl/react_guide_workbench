import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={() => console.log("clcicked")}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
