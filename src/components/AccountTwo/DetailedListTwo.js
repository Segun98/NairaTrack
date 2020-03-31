import React, { useContext } from "react";
import { AccountTwoContext } from "../../Contexts/AccountTwo";
import Commas from "../../Commas";

export default function DetailedListOne() {
  const { valueTransactionTwo, AccountTwoBalance, incomeTwoTotal, ExpensesTwoTotal } = useContext(
    AccountTwoContext
  );

  const [TransactionTwo] = valueTransactionTwo;

  if ( ExpensesTwoTotal === 0 && incomeTwoTotal === 0 && AccountTwoBalance === 0 ) return (<div> { '' }</div>)


  return (
    <div className="detailed-list">
    <div style={{ margin:"10px auto", width:'50%', textAlign:"center"}}>
    <ul className="analysis-summary-two">
            <li>Income ~ &#8358;{Commas(incomeTwoTotal)}</li>
            <li>Expenses ~ &#8358;{Commas(ExpensesTwoTotal)}</li>
            <li
              style={{
                backgroundColor: AccountTwoBalance >= 0 ? "#32cd32" : "#ff0000",
                color: "white",
                padding: "4px 10px",
                borderRadius:"8px"
              }}
            >
              Balance ~ &#8358;{Commas(AccountTwoBalance)}
            </li>
          </ul>

    </div>
      <div className="detailed-list-head-two">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Price</h4>
        <h4>Units</h4>
        <h4>Total</h4>
      </div>
      <div>
        {TransactionTwo.map((list, index) => (
          <div className="det-list-two" key={index}>
            <ul
              className="list-two"
              style={{
                color: list.type === "Income" ? "#32cd32" : "#ff0000"
              }}
            >
              <li>{list.date}</li>
              <li>{list.name}</li>
              <li>{Commas(list.unitPrice)}</li>
              <li>{list.Units}</li>
              <li>{Commas(list.amount)}</li>
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "20rem"
        }}
      >
        <h3> </h3>
      </div>
    </div>
  );
}
