import React, { createContext, useState, useEffect } from "react";

export const AccountOneContext = createContext();

export function AccountOneProvider(props) {
  //Refactored code, Transaction for the first account is now in a single state. Scroll down to see the old code.
  const [TransactionOne, setTransactionOne] = useState(StoreTransactionOne);

  //Filtered Expense and income
  const expensesOneArray = TransactionOne.filter(t => t.type === "Expense");
  const incomeOneArray = TransactionOne.filter(t => t.type === "Income");

  // Map through amount
  const expensesOneAmount = expensesOneArray.map(expenses => expenses.amount);
  const incomeOneAmount = incomeOneArray.map(income => income.amount);

  // find total
  const ExpensesOneTotal = expensesOneAmount.reduce(
    (acc, item) => acc + item,
    0
  );
  const incomeOneTotal = incomeOneAmount.reduce((acc, item) => acc + item, 0);

  // finds the balance

  const AccountOneBalance = incomeOneTotal - ExpensesOneTotal;

  //PERSIST INPUTS TO LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("TransactionOne", JSON.stringify(TransactionOne));
  }, [TransactionOne]);

  function StoreTransactionOne() {
    const SavedTransactionOne = JSON.parse(
      localStorage.getItem("TransactionOne")
    );
    return SavedTransactionOne || [];
  }

  // Change Name

  const [Name, setName] = useState(StoreName);
  const [inputName, setinputName] = useState("");
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(Name));
  }, [Name]);

  function StoreName() {
    const SavedName = JSON.parse(localStorage.getItem("name"));
    return SavedName || [];
  }

  return (
    <AccountOneContext.Provider
      value={{
        valueTransactionOne: [TransactionOne, setTransactionOne],
        incomeOneTotal,
        ExpensesOneTotal,
        AccountOneBalance,
        expensesOneArray,
        incomeOneArray,
        Name,
        setName,
        inputName,
        setinputName
      }}
    >
      {props.children}
    </AccountOneContext.Provider>
  );
}

//OLD CODE

// const [IncomeOne, setIncomeOne] = useState(StoreIncomeOne);
// const [ExpensesOne, setExpensesOne] = useState(StoreExpensesOne);

//Mapped through the amounts
// const IncomeOneAmounts = IncomeOne.map(incomeOne => incomeOne.amount);

// const ExpensesOneAmounts = ExpensesOne.map(expensesOne => expensesOne.amount);

//found the total

// const incomeOneTotal = IncomeOneAmounts.reduce((acc, item) => acc + item, 0);
//console.log(incomeOneTotal);

// const ExpensesOneTotal = ExpensesOneAmounts.reduce(
//   (acc, item) => acc + item,
//   0
// );

//console.log(ExpensesOneTotal);

// finds the balance

// const AccountOneBalance = incomeOneTotal - ExpensesOneTotal;
//console.log(AccountOneBalance);

//PERSIST INPUTS TO LOCAL STORAGE

// useEffect(() => {
//   localStorage.setItem("incomeOne", JSON.stringify(IncomeOne));
// }, [IncomeOne]);

// function StoreIncomeOne() {
//   const SavedIncomeOne = JSON.parse(localStorage.getItem("incomeOne"));
//   return SavedIncomeOne || [];
// }

// useEffect(() => {
//   localStorage.setItem("expensesOne", JSON.stringify(ExpensesOne));
// }, [ExpensesOne]);

// function StoreExpensesOne() {
//   const SavedExpensesOne = JSON.parse(localStorage.getItem("expensesOne"));
//   return SavedExpensesOne || [];
// }
