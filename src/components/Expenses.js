import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css' //dont forget your css file :)

function Expenses(props) {
    const expObj = props.children[1]
    return (
    <div className="expenses">
      <ExpenseItem
        title={expObj[0].title}
        amount={expObj[0].amount}
        date={expObj[0].date}
      />
      <ExpenseItem
        title={expObj[1].title}
        amount={expObj[1].amount}
        date={expObj[1].date}
      />
      <ExpenseItem
        title={expObj[2].title}
        amount={expObj[2].amount}
        date={expObj[2].date}
      />
    </div>
  );
}

export default Expenses