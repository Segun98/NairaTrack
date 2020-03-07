import React, { useContext } from "react";
import Commas from "../../Commas";
import { AccountOneContext } from "../../Contexts/AccountOne";

export default function ExpensesOneList({ name, date, amount, index }) {
  const { valueTwoAccountOne } = useContext(AccountOneContext);
  const [ExpensesOne, setExpensesOne] = valueTwoAccountOne;

  function handleDelete() {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const newExpensesOne = [...ExpensesOne];
      newExpensesOne.splice(index, 1);
      setExpensesOne(newExpensesOne);
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
        <i className="fas fa-minus-circle"></i>
        </div>
      </div>
    </div>
  );
}
