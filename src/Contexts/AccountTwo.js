import React, { createContext, useState, useEffect } from "react";

export const AccountTwoContext = createContext();

export function AccountTwoProvider(props) {
  const [IncomeTwo, setIncomeTwo] = useState(StoreIncomeTwo);
  const [ExpensesTwo, setExpensesTwo] = useState(StoreExpensesTwo);

  //Mapped through the amounts
  const IncomeTwoAmounts = IncomeTwo.map(incomeTwo => incomeTwo.amount)

  const ExpensesTwoAmounts = ExpensesTwo.map(expensesTwo => expensesTwo.amount)


  //console.log(`${IncomeTwoAmounts} ${ExpensesTwoAmounts}`);


  //found the total

  const incomeTwoTotal = IncomeTwoAmounts.reduce((acc, item)=> (acc + item), 0)
  
  

  const ExpensesTwoTotal = ExpensesTwoAmounts.reduce((acc, item)=> (acc + item), 0)

  //console.log(ExpensesTwoTotal);

  // finds the balance

  const AccountTwoBalance = incomeTwoTotal - ExpensesTwoTotal;
  //console.log(AccountTwoBalance);
  

  //PERSIST INPUTS TO LOCAL STORAGE

    useEffect(() => {
      localStorage.setItem("incomeTwo", JSON.stringify(IncomeTwo));
    }, [IncomeTwo]);

    function StoreIncomeTwo() {
      const SavedIncomeTwo= JSON.parse(localStorage.getItem("incomeTwo"));
      return SavedIncomeTwo || [];
    }

    useEffect(() => {
      localStorage.setItem("expensesTwo", JSON.stringify(ExpensesTwo));
    }, [ExpensesTwo]);

    function StoreExpensesTwo() {
      const SavedExpensesTwo= JSON.parse(localStorage.getItem("expensesTwo"));
      return SavedExpensesTwo || [];
    }

  return (
    <AccountTwoContext.Provider
      value={{
        valueOneAccountTwo: [IncomeTwo, setIncomeTwo],
        valueTwoAccountTwo: [ExpensesTwo, setExpensesTwo],
        incomeTwoTotal:incomeTwoTotal,
        ExpensesTwoTotal:ExpensesTwoTotal,
        AccountTwoBalance:AccountTwoBalance
      }}
    >
      {props.children}
    </AccountTwoContext.Provider>
  );
}
