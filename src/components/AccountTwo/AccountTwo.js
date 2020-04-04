import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccountTwoContext } from "../../Contexts/AccountTwo";
import IncomeTwoList from "./IncomeTwoList";
import ExpensesTwoList from "./ExpensesTwoList";
import Commas from "../../Commas";
import axios from "axios";

export default function AccountTwo() {
  //Radio Option State
  const [Option, setOption] = useState("");

  function handleChange(e) {
    setOption(e.target.value);
  }

  //input text state

  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  //Units
  const [Units, setUnits] = useState(1);

  function handleUnits(e) {
    setUnits(e.target.value);
  }

  //Income and expenses from Context

  const {
    incomeTwoTotal,
    ExpensesTwoTotal,
    AccountTwoBalance,
    expensesTwoArray,
    incomeTwoArray,
    getTransactionsTwo,
  } = useContext(AccountTwoContext);

  //Add Transactions to database
  async function handleFormSubmit(e) {
    e.preventDefault();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const newTransaction = {
      id: `${Math.floor(Math.random() * 4489940000)}`,
      name: Name,
      amount: parseInt(Amount * Units),
      date: `${months[new Date().getMonth()]} ${new Date().getDate()}`,
      type: Option,
      Units,
      unitPrice: Amount,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        "/api/business/add",
        newTransaction,
        config
      );
      setName("");
      setAmount("");
      setOption("");
      setUnits(1);

      await getTransactionsTwo();
    } catch (err) {
      alert("an error occured");
    }
  }
  // getTransactions
  useEffect(() => {
    getTransactionsTwo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const LinkStyle = {
    textDecoration: "none",
    color: "whitesmoke",
  };
  return (
    <div className="account-One-page">
      <section
        className="acct-one-balance"
        style={{
          display:
            ExpensesTwoTotal === 0 &&
            incomeTwoTotal === 0 &&
            AccountTwoBalance === 0
              ? "none"
              : "block",
        }}
      >
        <div className="acct-one-box">
          <h4>Balance</h4>
          <p>&#8358; {Commas(AccountTwoBalance)}</p>
          <div className="acct-one-income-expense">
            <div>
              <h5>Income</h5>
              <p>&#8358; {Commas(incomeTwoTotal)}</p>
            </div>
            <div>
              <h5>Expenses</h5>
              <p>&#8358; {Commas(ExpensesTwoTotal)}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="acct-one-transactions"
        style={{
          display:
            ExpensesTwoTotal === 0 &&
            incomeTwoTotal === 0 &&
            AccountTwoBalance === 0
              ? "none"
              : "block",
        }}
      >
        <div className="acct-one-table-header">
          <h3>Income</h3>
          <h3>Expenses</h3>
        </div>
      </section>

      <section className="acct-one-table">
        <div className="acct-one-table-wrap">
          <div>
            {incomeTwoArray.map((incomeTwoList, index) => (
              <IncomeTwoList
                key={index}
                date={incomeTwoList.date}
                id={incomeTwoList._id}
                amount={incomeTwoList.amount}
                name={incomeTwoList.name}
              />
            ))}
          </div>
          <div>
            {expensesTwoArray.map((expensesTwoList, index) => (
              <ExpensesTwoList
                key={index}
                id={expensesTwoList._id}
                name={expensesTwoList.name}
                date={expensesTwoList.date}
                amount={expensesTwoList.amount}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className="full-list"
        style={{
          display:
            ExpensesTwoTotal === 0 &&
            incomeTwoTotal === 0 &&
            AccountTwoBalance === 0
              ? "none"
              : "block",
        }}
      >
        <Link to="business-account-detailed-list" style={LinkStyle}>
          <button>View Detailed List</button>
        </Link>
      </section>
      <section className="add-new-transaction">
        <div className="new-transaction-header">
          <h4>New Transaction</h4>
        </div>
        <form
          className="account-one-form"
          onSubmit={handleFormSubmit}
          autoComplete="on"
        >
          <div className="add-transaction-input">
            <div>
              <label htmlFor="Name">Name: </label>
              <input
                className="input-text"
                type="text"
                placeholder="e.g Sales, Loan..."
                required
                maxLength="30"
                value={Name}
                autoComplete="on"
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="amount">Amount: </label>
              <input
                className="input-text"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="amount..."
                maxLength="9"
                required
                value={Amount}
                onChange={handleAmountChange}
                autoComplete="off"
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <label htmlFor="amount">Unit: </label>
              <input
                className="input-text"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="4"
                value={Units}
                onChange={handleUnits}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="radio-buttons">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                className="input-radio"
                type="radio"
                name="transaction"
                value="Income"
                onChange={handleChange}
                checked={Option === "Income"}
                required
              />
              <label htmlFor="radio">- Income</label>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                className="input-radio"
                type="radio"
                name="transaction"
                value="Expense"
                onChange={handleChange}
                checked={Option === "Expense"}
                required
              />
              <label htmlFor="radio">- Expense</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
