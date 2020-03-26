import React, { createContext, useState, useEffect } from "react";

export const AccountTwoContext = createContext();

export function AccountTwoProvider(props) {
  const [TransactionTwo, setTransactionTwo] = useState(StoreTransactionTwo);

  //Filtered Expense and income
  const expensesTwoArray = TransactionTwo.filter(t => t.type === "Expense");
  const incomeTwoArray = TransactionTwo.filter(t => t.type === "Income");

  // find total
  const ExpensesTwoTotal = expensesTwoArray.reduce((a, b) => a + b.amount, 0);
  const incomeTwoTotal = incomeTwoArray.reduce((a, b) => a + b.amount, 0);

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
