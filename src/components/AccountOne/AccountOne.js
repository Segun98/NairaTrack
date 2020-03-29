import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AccountOneContext } from "../../Contexts/AccountOne";
import IncomeOneList from "./IncomeOneList";
import ExpensesOneList from "./ExpensesOneList";
import Commas from "../../Commas";
// import {animated , useTransition } from "react-spring"

export default function AccountOne() {
  
  // const transitions = useTransition(location, location => location.pathname, {
  //   from : {opacity: 0, width: '0%'},
  //   enter : {opacity: 0, width: '100%'},
  //   leave : {opacity: 0, width: '0%'},
  // })
  // {transitions.map(({ item: location, props, key }) => (
  //   <animated.div key={key} style={props}>
  //     </animated.div>
  //        ))}


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

  //Category
  const [Category, setCategory] = useState("");
  function updateCategory(e) {
    setCategory(e.target.value);
  }

  //Income and expenses from Context
  const {
    valueTransactionOne,
    incomeOneTotal,
    ExpensesOneTotal,
    AccountOneBalance,
    expensesOneArray,
    incomeOneArray
  } = useContext(AccountOneContext);

  const [TransactionOne, setTransactionOne] = valueTransactionOne;

  // const transition = useTransition(TransactionOne )


  // Submit Form to add transaction
  function handleFormSubmit(e) {
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
      "Dec"
    ];

    const newTransaction = {
      id: `${Math.floor(Math.random() * 4489940000)}`,
      name: Name,
      amount: parseInt(Amount),
      date: `${months[new Date().getMonth()]} ${new Date().getDate()}`,
      type: Option,
      category: `${Option === "Income" ? "Income" : Category === ""? "Other" : Category}`
    };
    setTransactionOne([...TransactionOne, newTransaction]);
    setName("");
    setAmount("");
    setOption("");
  }
console.log(TransactionOne);

  const LinkStyle = {
    textDecoration: "none",
    color: "whitesmoke"
  };
  return (
    <div className="account-one-page">
      <section
        className="acct-one-balance"
        style={{
          display:
            ExpensesOneTotal === 0 &&
            incomeOneTotal === 0 &&
            AccountOneBalance === 0
              ? "none"
              : "block"
        }}
      >
        <div className="acct-one-box">
          <h4>Balance</h4>
          <p>&#8358; {Commas(AccountOneBalance)}</p>
          <div className="acct-one-income-expense">
            <div>
              <h5>Income</h5>
              <p>&#8358; {Commas(incomeOneTotal)}</p>
            </div>
            <div>
              <h5>Expenses</h5>
              <p>&#8358; {Commas(ExpensesOneTotal)}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="acct-one-transactions"
        style={{
          display:
            ExpensesOneTotal === 0 &&
            incomeOneTotal === 0 &&
            AccountOneBalance === 0
              ? "none"
              : "block"
        }}
      >
        <div className="acct-one-table-header">
          <h3>Income</h3>
          <h3>Expenses</h3>
        </div>
        <hr />
      </section>

      <section className="acct-one-table">
        <div className="acct-one-table-wrap">
          <div>
            {incomeOneArray.map((incomeOneList, index) => (
              <IncomeOneList
                key={index}
                date={incomeOneList.date}
                id={incomeOneList.id}
                amount={incomeOneList.amount}
                name={incomeOneList.name}
              />
            ))}
          </div>
          <div>
            {expensesOneArray.map((expensesOneList, index) => (
              <ExpensesOneList
                key={index}
                id={expensesOneList.id}
                name={expensesOneList.name}
                date={expensesOneList.date}
                amount={expensesOneList.amount}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className="full-list"
        style={{
          display:
            ExpensesOneTotal === 0 &&
            incomeOneTotal === 0 &&
            AccountOneBalance === 0
              ? "none"
              : "block"
        }}
      >
        <Link to="personal-account-detailed-list" style={LinkStyle}>
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
                placeholder="e.g Food, salary..."
                required
                maxLength="25"
                value={Name}
                onChange={handleNameChange}
                autoComplete="on"
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
          </div>
          <div className="radio-buttons">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
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
                justifyContent: "center"
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
          <div
            style={{
              margin: "20px 0",
              cursor: "pointer",
              display: Option === "Expense" ? "block" : "none"
            }}
          >
            <label htmlFor="Category"> Category:</label>
            <br />
            <select
              value={Category}
              onChange={updateCategory}
              style={{
                width: "80px",
                marginTop: "10px",
                border: "none",
                borderBottom: "1px solid grey",
                background: "ghostwhite"
              }}
            >
              <option value="">--select--</option>
              <option value="Feeding">Feeding</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Telephone & Internet">Telephone & Internet</option>
              <option value="Transportation">Transportation</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
