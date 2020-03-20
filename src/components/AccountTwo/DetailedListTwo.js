import React, { useContext } from "react";
import { AccountTwoContext } from "../../Contexts/AccountTwo";
import Commas from "../../Commas";

export default function DetailedListOne() {
  const { valueTransactionTwo, AccountTwoBalance } = useContext(
    AccountTwoContext
  );

  const [TransactionTwo] = valueTransactionTwo;

  return (
    <div className="detailed-list">
      <div className="detailed-list-head-two">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Price</h4>
        <h4>Units</h4>
        <h4>Total</h4>
      </div>
      <div>
        {TransactionTwo.map((list, index) => (
          <ul className="det-list-two" key={index}>
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
          </ul>
        ))}
      </div>
      <div className="detailed-list-head-two">
        <h4>{""}</h4>
        <h4>{""}</h4>
        <h4>{""}</h4>
        <h4>{""}</h4>
        <h3 style={{ color: AccountTwoBalance >= 0 ? "green" : "red" }}>
          Balance: &#8358;{Commas(AccountTwoBalance)}
        </h3>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "14rem"
        }}
      >
        <h3> </h3>
      </div>
    </div>
  );
}
