import React, { useContext, useState } from "react";
import Commas from "../../Commas";
import { AccountOneContext } from "../../Contexts/AccountOne";

export default function IncomeOneList({ name, date, amount, id }) {
  const { valueTransactionOne } = useContext(AccountOneContext);
  const [TransactionOne, setTransactionOne] = valueTransactionOne;

  const [Modal, setModal] = useState(true);

  function handleDelete() {
    const newIncome = TransactionOne.filter(one => one.id !== id);
    setTransactionOne(newIncome);
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
      <div className="income-one-list">
        <div className="deltebtn-income" title="delete" onClick={deleteItem}>
          <i className="fas fa-minus-circle"></i>
        </div>
        <div className="income-one-details">
          <div className="date">{date}</div>
          <div className="name" title={name}>
            {name}
          </div>
          <div
            className="amount"
            title={Commas(amount)}
            style={{ color: "green" }}
          >
            {Commas(amount)}
          </div>
        </div>
      </div>
    </div>
  );
}
