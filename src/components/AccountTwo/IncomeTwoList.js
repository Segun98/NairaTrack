import React, { useContext } from "react";
import Commas from "../../Commas";
import { AccountTwoContext } from "../../Contexts/AccountTwo";

export default function IncomeTwoList({ name, date, amount, index }) {
  const { valueOneAccountTwo } = useContext(AccountTwoContext);
  const [IncomeTwo, setIncomeTwo] = valueOneAccountTwo;

  function handleDelete() {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const newIncomeTwo = [...IncomeTwo];
      newIncomeTwo.splice(index, 1);
      setIncomeTwo(newIncomeTwo);
    }
  }
  return (
    <div>
      <div className="income-one-list">
        <div className="deltebtn-income" title="delete" onClick={handleDelete}>
        <i className="far fa-trash-alt"></i>
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
