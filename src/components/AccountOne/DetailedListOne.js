import React, { useContext } from "react";
import { AccountOneContext } from "../../Contexts/AccountOne";
import Commas from "../../Commas";

export default function DetailedListOne() {
  const {
    valueTransactionOne,
    AccountOneBalance,
    expensesOneArray,
    incomeOneTotal,
    ExpensesOneTotal
  } = useContext(AccountOneContext);

  const [TransactionOne] = valueTransactionOne;

  // List according to time of transaction , no longer needed.
  // const arranged = TransactionOne.sort((a, b) => new Date(a.time) - new Date(b.time));

  // Percentage Calculation for each Category

  function Education() {
    const Education = expensesOneArray.filter(
      one => one.Category === "Education"
    );
    let TotalEducation = Education.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalEducation);

    let educationPercent = (TotalEducation / incomeOneTotal) * 100;

    return Math.round(educationPercent);
  }
  //  Education();

  console.log("Education Takes " + Education() + "%");

  function Feeding() {
    const Feeding = expensesOneArray.filter(one => one.Category === "Feeding");
    let TotalFeeding = Feeding.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalFeeding);

    let feedingPercent = (TotalFeeding / incomeOneTotal) * 100;
    return Math.round(feedingPercent);
  }

  // Feeding()

  console.log("Feeding Takes " + Feeding() + "%");

  function Telephone() {
    const Telephone = expensesOneArray.filter(
      one => one.Category === "Telephone & Internet"
    );
    let TotalTelephone = Telephone.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalTelephone);

    let telephonePercent = (TotalTelephone / incomeOneTotal) * 100;
    return Math.round(telephonePercent);
  }

  // Telephone()

  console.log("Telephone Takes " + Telephone() + "%");

  function HealthCare() {
    const HealthCare = expensesOneArray.filter(
      one => one.Category === "HealthCare"
    );
    let TotalHealthCare = HealthCare.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalHealthCare);

    let HealthCarePercent = (TotalHealthCare / incomeOneTotal) * 100;
    return Math.round(HealthCarePercent);
  }

  // HealthCare()

  console.log("HealthCare Takes " + HealthCare() + "%");

  function Transportation() {
    const Transportation = expensesOneArray.filter(
      one => one.Category === "Transportation"
    );
    let TotalTransportation = Transportation.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalTransportation);

    let TransportationPercent = (TotalTransportation / incomeOneTotal) * 100;
    return Math.round(TransportationPercent);
  }

  // Transportation()

  console.log("Transportation Takes " + Transportation() + "%");

  let total =
    Transportation() + HealthCare() + Education() + Feeding() + Telephone();
  console.log("total " + total);

  // Quiff Maffs to sum the "Other" to the remaining left out percentage
  let rest = 100 - total;

  function Other() {
    const Other = expensesOneArray.filter(one => one.Category === "Other");
    let TotalOther = Other.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalOther);

    let OtherPercent = (TotalOther / incomeOneTotal) * 100;

    console.log("Other " + Math.round(OtherPercent));
    let remain = rest - OtherPercent;
    return remain + Math.round(OtherPercent);
  }

  console.log("Other " + Math.round(Other()) + "%");

  // Percentage of All Expenses from Income

  function percentage() {
    const div = ExpensesOneTotal / incomeOneTotal;

    const percent = div * 100;
    // console.log(percent);

    return Math.round(percent);

    // .toFixed(1)
  }
  percentage();
  return (
    <div className="detailed-list">
      <div className="detailed-list-head">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Amount</h4>
      </div>
      <div>
        {TransactionOne.map((list, index) => (
          <ul className="det-list" key={index}>
            <ul
              className="list"
              style={{
                color: list.type === "Income" ? "#32cd32" : "#ff0000"
              }}
            >
              <li>{list.date}</li>
              <li>{list.name}</li>
              <li>{Commas(list.amount)}</li>
            </ul>
          </ul>
        ))}
      </div>
      <div className="detailed-list-head">
        <h4>{""}</h4>
        <h4>{""}</h4>
        <h3 style={{ color: AccountOneBalance >= 0 ? "green" : "red" }}>
          Balance: &#8358;{Commas(AccountOneBalance)}
        </h3>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "14rem"
        }}
      >
        <h3> </h3>
      </div>
    </div>
  );
}
