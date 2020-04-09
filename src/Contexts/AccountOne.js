import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const AccountOneContext = createContext();

export function AccountOneProvider(props) {
  //Transaction State
  const [TransactionOne, setTransactionOne] = useState([]);

   //GET transactions from the database

 async function getTransactions() {
  try {
    const res = await axios.get('http://localhost:8080/api/personal');
    const data = await res.data.data
    setTransactionOne(data)
  } catch (err) {
    console.log('internal error');
    console.log(err);
    
    
  }
}

  //Filtered Expense and income
  const expensesOneArray = TransactionOne.filter(t => t.type === "Expense");
  const incomeOneArray = TransactionOne.filter(t => t.type === "Income");

  // find total
  const ExpensesOneTotal = expensesOneArray.reduce((a, b) => a + b.amount, 0);
  const incomeOneTotal = incomeOneArray.reduce((a, b) => a + b.amount, 0);

  // finds the balance

  const AccountOneBalance = incomeOneTotal - ExpensesOneTotal;

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
        getTransactions,
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
