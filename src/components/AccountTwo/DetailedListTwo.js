import React, { useContext } from "react";
import { AccountTwoContext } from "../../Contexts/AccountTwo";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Commas from "../../Commas";

export default function DetailedListOne() {
  let history = useHistory();

  const {
    valueOneAccountTwo,
    valueTwoAccountTwo,
    AccountTwoBalance
  } = useContext(AccountTwoContext);

  const [IncomeTwo] = valueOneAccountTwo;
  const [ExpensesTwo] = valueTwoAccountTwo;

  const Merge = [...IncomeTwo, ...ExpensesTwo];
  //   console.log(Merge);

  //   List according to time of transaction
  const arranged = Merge.sort((a, b) => new Date(a.time) - new Date(b.time));
  //new Date().toLocaleString()

  const LinkStyle = {
    textDecoration: "none",
    color: "whitesmoke"
  };
  return (
    <div className="detailed-list">
      <header>
        <div className="index-header-wrap">
          <div
            className="homeNav"
            title="Back"
            onClick={() => {
              history.goBack();
            }}
          >
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div
            className="index-header-welcome"
            style={{ fontSize: "1.2rem", marginTop: "8px" }}
          >
            Business Account List
          </div>
          <div className="index-menu" title="menu">
            <Link style={LinkStyle} to="/about">
              <i className="fas fa-ellipsis-h"></i>
            </Link>
          </div>
        </div>
      </header>
      {/* <h3 style={{textAlign:"center", margin:"10px 0", textDecoration:"underline"}}>Personal Account</h3> */}
      <div className="detailed-list-head-two">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Price</h4>
        <h4>Units</h4>
        <h4>Total(&#8358;)</h4>
      </div>
      <div>
        {arranged.map((list, index) => (
          <ul
            className="det-list-two"
            style={{
              background:
                list.type === "Income" ? "rgb(50,205,50)" : "rgb(194,30,86)"
            }}
            key={index}
          >
            <ul className="list-two">
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
        <h3>Balance: &#8358;{Commas(AccountTwoBalance)}</h3>
      </div>
      <div
        style={{ textAlign: "center", marginTop: "3rem", marginBottom: "14rem" }}
      >
        <h3>
          Request a feature{" "}
          <a
            href="https://segunos.tk/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </h3>
      </div>
    </div>
  );
}
