import React, { useContext } from "react";
import { AccountOneContext } from "../../Contexts/AccountOne";
import Commas from "../../Commas";

export default function DetailedListOne() {
  const { valueTransactionOne, AccountOneBalance } = useContext(
    AccountOneContext
  );

  const [TransactionOne] = valueTransactionOne;

  // List according to time of transaction , no longer needed with the new code. see AccountOne context for old code
  // const arranged = TransactionOne.sort((a, b) => new Date(a.time) - new Date(b.time));

  return (
    <div className="detailed-list">
      <div className="detailed-list-head">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Amount</h4>
      </div>
      <div>
        {TransactionOne.map((list, index) => (
          <ul className="det-list" key={index}>
            <ul
              className="list"
              style={{
                color: list.type === "Income" ? "#32cd32" : "#ff0000"
              }}
            >
              <li>{list.date}</li>
              <li>{list.name}</li>
              <li>{Commas(list.amount)}</li>
            </ul>
          </ul>
        ))}
      </div>
      <div className="detailed-list-head">
        <h4>{""}</h4>
        <h4>{""}</h4>
        <h3 style={{ color: AccountOneBalance >= 0 ? "green" : "red" }}>
          Balance: &#8358;{Commas(AccountOneBalance)}
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
