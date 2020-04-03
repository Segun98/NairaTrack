import React, { createContext, useState } from "react";
import axios from "axios";

export const AccountTwoContext = createContext();

export function AccountTwoProvider(props) {
  const [TransactionTwo, setTransactionTwo] = useState([]);

  //GET transactions from the database

  async function getTransactionsTwo() {
    try {
      const res = await axios.get("/api/business");
      // console.log(res.data);
      const data = res.data.data;
      setTransactionTwo(data);
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  }
  //Filtered Expense and income
  const expensesTwoArray = TransactionTwo.filter((t) => t.type === "Expense");
  const incomeTwoArray = TransactionTwo.filter((t) => t.type === "Income");

  // find total
  const ExpensesTwoTotal = expensesTwoArray.reduce((a, b) => a + b.amount, 0);
  const incomeTwoTotal = incomeTwoArray.reduce((a, b) => a + b.amount, 0);

  // finds the balance
  const AccountTwoBalance = incomeTwoTotal - ExpensesTwoTotal;

  //PERSIST INPUTS TO LOCAL STORAGE - Now connected to Database

  // useEffect(() => {
  //   localStorage.setItem("TransactionTwo", JSON.stringify(TransactionTwo));
  // }, [TransactionTwo]);

  // function StoreTransactionTwo() {
  //   const SavedTransactionTwo = JSON.parse(
  //     localStorage.getItem("TransactionTwo")
  //   );
  //   return SavedTransactionTwo || [];
  // }

  return (
    <AccountTwoContext.Provider
      value={{
        valueTransactionTwo: [TransactionTwo, setTransactionTwo],
        incomeTwoTotal,
        ExpensesTwoTotal,
        AccountTwoBalance,
        expensesTwoArray,
        incomeTwoArray,
        getTransactionsTwo,
      }}
    >
      {props.children}
    </AccountTwoContext.Provider>
  );
}
