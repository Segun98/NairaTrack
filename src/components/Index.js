import React, { useContext, useState } from "react";
import { AccountOneContext } from "../Contexts/AccountOne";
import { AccountTwoContext } from "../Contexts/AccountTwo";
import { Link } from "react-router-dom";
import Commas from "../Commas";

export default function Index() {
  const {
    incomeOneTotal,
    ExpensesOneTotal,
    AccountOneBalance,
    valueOneAccountOne,
    valueTwoAccountOne
  } = useContext(AccountOneContext);
  const {
    incomeTwoTotal,
    ExpensesTwoTotal,
    AccountTwoBalance,
    valueOneAccountTwo,
    valueTwoAccountTwo
  } = useContext(AccountTwoContext);

  const [IncomeOne, setIncomeOne] = valueOneAccountOne;
  const [ExpensesOne, setExpensesOne] = valueTwoAccountOne;

  const [IncomeTwo, setIncomeTwo] = valueOneAccountTwo;
  const [ExpensesTwo, setExpensesTwo] = valueTwoAccountTwo;

  const LinkStyle={
    textDecoration:'none',
    color:'whitesmoke'
}

const [Modal, setModal] = useState(true);
const [ModalTwo, setModalTwo] = useState(true)

function handleDelete() {
      const newAccountOne = [...IncomeOne, ...ExpensesOne];
      newAccountOne.splice(0, newAccountOne.length);
      setIncomeOne(newAccountOne);
      setExpensesOne(newAccountOne);
  setModal(true);
}
function deleteItem() {
  setModal(false);
}

function handleDeleteTwo() {
  const newAccountTwo = [...IncomeTwo, ...ExpensesTwo];
  newAccountTwo.splice(0, newAccountTwo.length);
  setIncomeTwo(newAccountTwo);
  setExpensesTwo(newAccountTwo);
setModalTwo(true);
}
function deleteItemTwo() {
setModalTwo(false);
}
  return (
    <section className="index-page">
      <header>
        <div className="index-header-wrap">
          <div className="index-header-welcome">Hi, User!</div>
          <div className="index-menu" title="menu">
          <Link style={LinkStyle} to ='/about'>
          <i className="fas fa-ellipsis-h"></i>
          </Link>
          </div>
        </div>
      </header>
      <section className="random-quotes">
        <div className="quotes">
          <h4>
            "It is important to track every of your daily transactions, start
            accounting and see the difference!"
          </h4>
        </div>
      </section>

      <div className={Modal ? "modal" : "modal close-modal"}>
        <div className="modal-content">
          <div className="modal-head">
            <p>Delete Account</p>
            <p
              onClick={() => {
                setModal(true);
              }}
            >
              &times;
            </p>
          </div>
          <div className="modal-body">
            <h4>Are you sure you want to delete PERSONAL ACCOUNT? All data will be lost and cannot be recovered.</h4>
          </div>
          <div className="modal-footer">
            <div></div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>

      <div className={ModalTwo ? "modal-two" : "modal-two close-modal"}>
        <div className="modal-content">
          <div className="modal-head">
            <p>Delete Account</p>
            <p
              onClick={() => {
                setModalTwo(true);
              }}
            >
              &times;
            </p>
          </div>
          <div className="modal-body">
            <h4>Are you sure you want to delete BUSINESS ACCOUNT? All data will be lost and cannot be recovered.</h4>
          </div>
          <div className="modal-footer">
            <div></div>
            <button onClick={handleDeleteTwo}>Delete</button>
          </div>
        </div>
      </div>

      <section className="index-account-one-two-wrap">
        <section className="index-account-one">
          <div className="index-account-one-box">
            <h4>Personal Account</h4>
            <div className="index-account-details-wrap">
              <div className="index-account-one-income">
                <h5>Income</h5>
                <p>&#8358; {Commas(incomeOneTotal)}</p>
              </div>
              <div className="index-account-one-expenses">
                <h5>Expenses</h5>
                <p>&#8358; {Commas(ExpensesOneTotal)}</p>
              </div>
            </div>
            <div className="index-account-one-balance">
              <h5>Balance</h5>
              <p>&#8358; {Commas(AccountOneBalance)}</p>
            </div>
          </div>
          <button>
            <Link
              to="/account-one"
              style={{ textDecoration: "none", color:"whitesmoke" }}
            >
              Manage
            </Link>
          </button>
          <button
            style={{
              border: "none",
              color:"whitesmoke",
              background: "rgb(160, 4, 4)",
              marginLeft: "5px",
              cursor: "pointer",
              display: ExpensesOneTotal === 0 && incomeOneTotal === 0 && AccountOneBalance === 0 ? 'none' : 'inline-block'
            }}
            title="Delete"
            onClick={deleteItem}
          >
            Clear
          </button>
        </section>

        <section className="index-account-two">
          <div className="index-account-two-box">
            <h4>Business Account</h4>
            <div className="index-account-details-wrap">
              <div className="index-account-two-income">
                <h5>Income</h5>
                <p>&#8358; {Commas(incomeTwoTotal)}</p>
              </div>
              <div className="index-account-two-expenses">
                <h5>Expenses</h5>
                <p>&#8358; {Commas(ExpensesTwoTotal)}</p>
              </div>
            </div>
            <div className="index-account-two-balance">
              <h5>Balance</h5>
              <p> &#8358; {Commas(AccountTwoBalance)}</p>
            </div>
          </div>
          <button>
            <Link
              to="/account-two"
              style={{ textDecoration: "none", color: "white" }}
            >
              Manage
            </Link>
          </button>
          <button
            style={{
              border: "none",
              color: "white",
              background: "rgb(160, 4, 4)",
              marginLeft: "5px",
              cursor: "pointer",
              display: ExpensesTwoTotal === 0 && incomeTwoTotal === 0 && AccountTwoBalance === 0 ? 'none' : 'inline-block',
              
            }}
            title="Delete"
            onClick={deleteItemTwo}
          >
            Clear
          </button>
        </section>
      </section>
    </section>
  );
}
