import React, { createContext, useState, useEffect } from "react";

export const AccountOneContext = createContext();

export function AccountOneProvider(props) {

  //const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [IncomeOne, setIncomeOne] = useState(StoreIncomeOne);
  const [ExpensesOne, setExpensesOne] = useState(StoreExpensesOne);

  //Mapped through the amounts
  const IncomeOneAmounts = IncomeOne.map(incomeOne => incomeOne.amount)

  const ExpensesOneAmounts = ExpensesOne.map(expensesOne => expensesOne.amount)


  //console.log(`${IncomeOneAmounts} ${ExpensesOneAmounts}`);


  //found the total

  const incomeOneTotal = IncomeOneAmounts.reduce((acc, item)=> (acc + item), 0)
  //console.log(incomeOneTotal);
  

  const ExpensesOneTotal = ExpensesOneAmounts.reduce((acc, item)=> (acc + item), 0)

  //console.log(ExpensesOneTotal);

  // finds the balance

  const AccountOneBalance = incomeOneTotal - ExpensesOneTotal;
  //console.log(AccountOneBalance);
  
  
  

  //PERSIST INPUTS TO LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("incomeOne", JSON.stringify(IncomeOne));
  }, [IncomeOne]);

  function StoreIncomeOne() {
    const SavedIncomeOne= JSON.parse(localStorage.getItem("incomeOne"));
    return SavedIncomeOne || [];
  }

  useEffect(() => {
    localStorage.setItem("expensesOne", JSON.stringify(ExpensesOne));
  }, [ExpensesOne]);

  function StoreExpensesOne() {
    const SavedExpensesOne= JSON.parse(localStorage.getItem("expensesOne"));
    return SavedExpensesOne || [];
  }


  return (
    <AccountOneContext.Provider
      value={{
        valueOneAccountOne: [IncomeOne, setIncomeOne],
        valueTwoAccountOne: [ExpensesOne, setExpensesOne],
        incomeOneTotal:incomeOneTotal,
        ExpensesOneTotal:ExpensesOneTotal,
        AccountOneBalance:AccountOneBalance
      }}
    >
      {props.children}
    </AccountOneContext.Provider>
  );
}
// {
//   id:1,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Salary",
//   amount: 170500,
//   category: 'Income'
// },
// {
//   id:2,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Allowance",
//   amount: 100000,
//   category: 'Income'
// },
// {
//   id:2,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Gift",
//   amount: 5000,
//   category: 'Income'
// }


// {
//   id:1,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Transport",
//   amount: 10000,
//   category: 'Trnasportation'
// },
// {
//   id:2,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Food",
//   amount: 3500,
//   category: 'Feeding'
// },
// {
//   id:3,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Rent",
//   amount: 95570,
//   category: 'Rent'
// },
// {
//   id:4,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Books",
//   amount: 10500,
//   category: 'Stationery'
// },
// {
//   id:5,
//   date: `${months[new Date().getMonth()]} ${new Date().getDate()} `,
//   name: "Mobile Data",
//   amount: 4000,
//   category: 'Telephone'
// }