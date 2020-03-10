import React, { useContext } from "react";
import Commas from "../../Commas";
import { AccountTwoContext } from "../../Contexts/AccountTwo";

export default function ExpensesTwoList({ name, date, amount, index }) {
  const { valueTwoAccountTwo } = useContext(AccountTwoContext);
  const [ExpensesTwo, setExpensesTwo] = valueTwoAccountTwo;

  function handleDelete() {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const newExpensesTwo = [...ExpensesTwo];
      newExpensesTwo.splice(index, 1);
      setExpensesTwo(newExpensesTwo);
    }
  }
  return (
    <div>
      <div className="expense-one-list">
        <div className="expense-one-details">
          <div className="date">{date}</div>
          <div className="name" title={name}>{name}</div>
          <div className="amount" title={Commas(amount)}>{Commas(amount)}</div>
        </div>
        <div className="deltebtn-expense" title="delete" onClick={handleDelete}>
        {/* <i className="far fa-trash-alt"></i> */}
        <i className="fas fa-minus-circle"></i>
        </div>
      </div>
    </div>
  );
}
