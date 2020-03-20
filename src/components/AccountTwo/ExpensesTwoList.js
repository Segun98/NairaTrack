import React, { useContext, useState } from "react";
import Commas from "../../Commas";
import { AccountTwoContext } from "../../Contexts/AccountTwo";

export default function ExpensesTwoList({ name, date, amount, id }) {
  const { valueTransactionTwo } = useContext(AccountTwoContext);
  const [TransactionTwo, setTransactionTwo] = valueTransactionTwo;

  const [Modal, setModal] = useState(true);

  function handleDelete() {
    const newExpensesTwo = TransactionTwo.filter(two => two.id !== id);
    setTransactionTwo(newExpensesTwo);
    setModal(true);
  }
  function deleteItem() {
    setModal(false);
  }

  return (
    <div>
      <div className={Modal ? "modal" : "modal close-modal"}>
        <div className="modal-content">
          <div className="modal-head">
            <p>Delete Transaction</p>
            <p
              onClick={() => {
                setModal(true);
              }}
            >
              &times;
            </p>
          </div>
          <div className="modal-body">
            <h4>Are you sure you want to delete this item: ({`${name}`})?</h4>
          </div>
          <div className="modal-footer">
            <div></div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className="expense-one-list">
        <div className="expense-one-details">
          <div className="date">{date}</div>
          <div className="name" title={name}>
            {name}
          </div>
          <div
            className="amount"
            title={Commas(amount)}
            style={{ color: "red" }}
          >
            {Commas(amount)}
          </div>
        </div>
        <div className="deltebtn-expense" title="delete" onClick={deleteItem}>
          {/* <i className="far fa-trash-alt"></i> */}
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
    </div>
  );
}
