import React, { createContext, useState, useEffect } from "react";

export const AccountOneContext = createContext();

export function AccountOneProvider(props) {
  //Transaction State
  const [TransactionOne, setTransactionOne] = useState(StoreTransactionOne);

  //Filtered Expense and income
  const expensesOneArray = TransactionOne.filter(t => t.type === "Expense");
  const incomeOneArray = TransactionOne.filter(t => t.type === "Income");

  // find total
  const ExpensesOneTotal = expensesOneArray.reduce((a, b) => a + b.amount, 0);
  const incomeOneTotal = incomeOneArray.reduce((a, b) => a + b.amount, 0);

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
