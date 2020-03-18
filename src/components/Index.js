import React, { useContext } from "react";
import { AccountOneContext } from "../Contexts/AccountOne";
import { AccountTwoContext } from "../Contexts/AccountTwo";
import { Link } from "react-router-dom";
import Commas from "../Commas";

export default function Index() {
  const { incomeOneTotal, ExpensesOneTotal, AccountOneBalance } = useContext(
    AccountOneContext
  );
  const { incomeTwoTotal, ExpensesTwoTotal, AccountTwoBalance } = useContext(
    AccountTwoContext
  );

  // const LinkStyle = {
  //   textDecoration: "none",
  //   color: "whitesmoke"
  // };

  // Quotes
  const quotes = [
    "It is important to track every of your daily transactions, start accounting and see the difference! Remember to share this app with someone",
    "Accounting is the language of business - Warren Buffett",
    "Do not save what is left after spending; instead spend what is left after saving - Warren Buffett",
    "The principles of wealth are true regarding large amounts and small amounts. It all begins with the smallest unit of currency - Hendrith Smith",
    "Look everywhere you can to cut a little bit from your expenses. It will all add up to a meaningful sum - Suze Orman",
    "It is adviced to track your business expenses separately from your personal, eventhough initially it may feel like they are one in the same if you are a one-man shop"
  ];

  // 2. Generate random number between 0 and quotes' length
  const random = Math.floor(Math.random() * ((quotes.length - 1) - 0 + 1)) + 0;

  //3. display quotes based on the generated random number
  const displayQuotes = quotes[random];
  return (
    <section className="index-page">
      <section className="random-quotes">
        <div className="quotes">
          <h4>"{displayQuotes}"</h4>
        </div>
      </section>

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
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              Manage
            </Link>
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
        </section>
      </section>
    </section>
  );
}
