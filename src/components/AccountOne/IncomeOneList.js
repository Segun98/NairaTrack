import React, { useContext, useState } from "react";
import Commas from "../../Commas";
import { AccountOneContext } from "../../Contexts/AccountOne";

export default function IncomeOneList({ name, date, amount, index }) {
  const { valueOneAccountOne } = useContext(AccountOneContext);
  const [IncomeOne, setIncomeOne] = valueOneAccountOne;

  const [Modal, setModal] = useState(true);

  function handleDelete() {
    const newIncomeOne = [...IncomeOne];
    newIncomeOne.splice(index, 1);
    setIncomeOne(newIncomeOne);
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
          <i className="fas fa-minus-circle">&times;</i>
        </div>
        <div className="income-one-details">
          <div className="date">{date}</div>
          <div className="name" title={name}>
            {name}
          </div>
          <div className="amount" title={Commas(amount)}>
            {Commas(amount)}
          </div>
        </div>
      </div>
    </div>
  );
}
