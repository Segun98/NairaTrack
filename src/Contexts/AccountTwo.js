import React, { createContext, useState, useEffect } from "react";

export const AccountTwoContext = createContext();

export function AccountTwoProvider(props) {
  const [TransactionTwo, setTransactionTwo] = useState(StoreTransactionTwo);

  //Filtered Expense and income
  const expensesTwoArray = TransactionTwo.filter(t => t.type === "Expense");
  const incomeTwoArray = TransactionTwo.filter(t => t.type === "Income");

  // Map through amount
  const expensesTwoAmount = expensesTwoArray.map(expenses => expenses.amount);
  const incomeTwoAmount = incomeTwoArray.map(income => income.amount);

  // find total
  const ExpensesTwoTotal = expensesTwoAmount.reduce(
    (acc, item) => acc + item,
    0
  );
  const incomeTwoTotal = incomeTwoAmount.reduce((acc, item) => acc + item, 0);

  // finds the balance
  const AccountTwoBalance = incomeTwoTotal - ExpensesTwoTotal;

  //PERSIST INPUTS TO LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("TransactionTwo", JSON.stringify(TransactionTwo));
  }, [TransactionTwo]);

  function StoreTransactionTwo() {
    const SavedTransactionTwo = JSON.parse(
      localStorage.getItem("TransactionTwo")
    );
    return SavedTransactionTwo || [];
  }

  return (
    <AccountTwoContext.Provider
      value={{
        valueTransactionTwo: [TransactionTwo, setTransactionTwo],
        incomeTwoTotal,
        ExpensesTwoTotal,
        AccountTwoBalance,
        expensesTwoArray,
        incomeTwoArray
      }}
    >
      {props.children}
    </AccountTwoContext.Provider>
  );
}
