import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AccountTwoContext } from "../../Contexts/AccountTwo";
import IncomeTwoList from "./IncomeTwoList";
import ExpensesTwoList from "./ExpensesTwoList";
import Commas from "../../Commas";
import { useHistory } from "react-router-dom";


export default function AccountTwo() {
  let history = useHistory();

  //Radio Option State
  const [Option, setOption] = useState("");

  function handleChange(e) {
    setOption(e.target.value);
  }

  //input text state

  const [Name, setName] = useState('')
  const [Amount, setAmount] = useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleAmountChange(e) {
      setAmount(e.target.value)
  }


  //Units 
  const [Units, setUnits] = useState(1)

function handleUnits(e){
    setUnits(e.target.value)
    

}
  
  //Income and expenses from Context
  const {
    valueOneAccountTwo,
    valueTwoAccountTwo,
    incomeTwoTotal,
    ExpensesTwoTotal,
    AccountTwoBalance
  } = useContext(AccountTwoContext);

  const [IncomeTwo, setIncomeTwo] = valueOneAccountTwo;
  const [ExpensesTwo, setExpensesTwo] = valueTwoAccountTwo;

  function handleFormSubmit(e) {
    e.preventDefault(); 
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const newTransaction ={
      id: `${Math.floor(Math.random() * 4489940000)}`,
      name: Name,
      amount: parseInt(Amount * Units),
      date: `${months[new Date().getMonth()]} ${new Date().getDate()}`,
      time:new Date(),
      type: Option,
      Units,
      unitPrice: Amount
    }

    if (Option === "Income"){
      setIncomeTwo([...IncomeTwo, newTransaction])
    }else{
      setExpensesTwo([...ExpensesTwo, newTransaction])
    }
    setName('')
    setAmount('')
    setOption('')
    setUnits(1)
    
}

const LinkStyle={
  textDecoration:'none',
  color:'whitesmoke'
}
  return (
    <div className="account-One-page">
      <header>
        <div className="index-header-wrap">
          <div className="homeNav" title="Back" onClick={ ()=> { history.goBack() }} >
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="index-header-welcome" style={{fontSize:"1.2rem"}}>Business Account</div>
          <div className="index-menu" title="menu"><Link style={LinkStyle} to ='/about'>
          <i className="fas fa-ellipsis-h"></i></Link></div>
        </div>
      </header>
      <section className="acct-one-balance" style={{display: ExpensesTwoTotal === 0 && incomeTwoTotal === 0 && AccountTwoBalance === 0 ? 'none' : 'block'}}>
        <div className="acct-one-box">
          <h4>Balance</h4>
          <p>&#8358; {Commas(AccountTwoBalance)}<span style={{fontSize:'11px'}}>{isNaN(AccountTwoBalance)? '(Not a number)': null}</span></p>
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
      <section className="acct-one-transactions" style={{display: ExpensesTwoTotal === 0 && incomeTwoTotal === 0 && AccountTwoBalance === 0 ? 'none' : 'block'   }} >
        <div className="acct-one-table-header">
          <h3>Income</h3>
          <h3>Expenses</h3>
        </div>
        <hr/>
      </section>

      <section className="acct-one-table">
        <div className="acct-one-table-wrap">
          <div>
            {IncomeTwo.map((incomeTwoList, index) => (
              <IncomeTwoList
                key={index}
                index={index}
                date={incomeTwoList.date}
                id={incomeTwoList.id}
                amount={incomeTwoList.amount}
                name={incomeTwoList.name}
              />
            ))}
          </div>
          <div>
            {ExpensesTwo.map((expensesTwoList, index) => (
              <ExpensesTwoList
                key={index}
                index={index}
                id={expensesTwoList.id}
                name={expensesTwoList.name}
                date={expensesTwoList.date}
                amount={expensesTwoList.amount}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="full-list" style={{display: ExpensesTwoTotal === 0 && incomeTwoTotal === 0 && AccountTwoBalance === 0 ? 'none' : 'block' }}>
        <button>
        <Link to="business-account-detailed-list" style={LinkStyle}>
        View Detailed List
        </Link>
        </button>
      </section>
      <section className="add-new-transaction">
        <div className="new-transaction-header">
          <h4>New Transaction</h4>
        </div>
        <form
          className="account-one-form"
          onSubmit={handleFormSubmit}
        >
          <div className="add-transaction-input">
            <div>
              <label htmlFor="Name">Name: </label>
              <input
                className="input-text"
                type="text"
                placeholder="e.g Sales, Loan..."
                required
                maxLength="25"
                value={Name}
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
              />
            </div>
            <div style={{marginTop:"5px"}}>
              <label htmlFor="amount">Unit: </label> 
              <input
                className="input-text"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="4" value={Units} 
                onChange={handleUnits}
              />
            </div>
          </div>
          <div className="radio-buttons">
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} >
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
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
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

