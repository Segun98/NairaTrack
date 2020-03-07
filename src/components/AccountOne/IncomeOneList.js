import React, { useContext } from "react";
import Commas from "../../Commas";
import { AccountOneContext } from "../../Contexts/AccountOne";

export default function IncomeOneList({ name, date, amount, index }) {
  const { valueOneAccountOne } = useContext(AccountOneContext);
  const [IncomeOne, setIncomeOne] = valueOneAccountOne;

  function handleDelete() {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const newIncomeOne = [...IncomeOne];
      newIncomeOne.splice(index, 1);
      setIncomeOne(newIncomeOne);
    }
  }
  return (
    <div>
      <div className="income-one-list">
        <div className="deltebtn-income" title="delete" onClick={handleDelete}>
        <i className="fas fa-minus-circle"></i>
        </div>
        <div className="income-one-details">
          <div className="date">{date}</div>
          <div className="name" title={name}>{name}</div>
          <div className="amount" title={Commas(amount)}>{Commas(amount)}</div>
        </div>
      </div>
    </div>
  );
}
