import React, { useContext } from "react";
import { AccountOneContext } from "../../Contexts/AccountOne";
import Commas from "../../Commas";

export default function DetailedListOne() {
  const {
    valueOneAccountOne,
    valueTwoAccountOne,
    AccountOneBalance
  } = useContext(AccountOneContext);

  const [IncomeOne] = valueOneAccountOne;
  const [ExpensesOne] = valueTwoAccountOne;

  const Merge = [...IncomeOne, ...ExpensesOne];
  //   console.log(Merge);

  //   List according to time of transaction
  const arranged = Merge.sort((a, b) => new Date(a.time) - new Date(b.time));
  //new Date().toLocaleString()

  return (
    <div className="detailed-list">
      {/* <h3 style={{textAlign:"center", margin:"10px 0", textDecoration:"underline"}}>Personal Account</h3> */}
      <div className="detailed-list-head">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Amount</h4>
      </div>
      <div>
        {arranged.map((list, index) => (
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
