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
      one => one.category === "Education"
    );
    let TotalEducation = Education.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalEducation);

    let educationPercent = (TotalEducation / incomeOneTotal) * 100;

    return Math.round(educationPercent);
  }
  //  Education();

  console.log("Education Takes " + Education() + "%");

  function Feeding() {
    const Feeding = expensesOneArray.filter(one => one.category === "Feeding");
    let TotalFeeding = Feeding.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalFeeding);

    let feedingPercent = (TotalFeeding / incomeOneTotal) * 100;
    return Math.round(feedingPercent);
  }

  // Feeding()

  console.log("Feeding Takes " + Feeding() + "%");

  function Telephone() {
    const Telephone = expensesOneArray.filter(
      one => one.category === "Telephone & Internet"
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
      one => one.category === "HealthCare"
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
      one => one.category === "Transportation"
    );
    let TotalTransportation = Transportation.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalTransportation);

    let TransportationPercent = (TotalTransportation / incomeOneTotal) * 100;
    return Math.round(TransportationPercent);
  }

  // Transportation()

  console.log("Transportation Takes " + Transportation() + "%");

  function Rent() {
    const Rent = expensesOneArray.filter(one => one.category === "Rent");
    let TotalRent = Rent.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalRent);

    let RentPercent = (TotalRent / incomeOneTotal) * 100;
    // console.log(RentPercent);

    return Math.round(RentPercent);
  }

  console.log("Rent Takes " + Rent() + "%");

  function Household() {
    const Household = expensesOneArray.filter(
      one => one.category === "Household"
    );
    let TotalHousehold = Household.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalRent);

    let HouseholdPercent = (TotalHousehold / incomeOneTotal) * 100;
    // console.log(RentPercent);

    return Math.round(HouseholdPercent);
  }

  console.log("Household Takes " + Household() + "%");

  function Vehicle() {
    const Vehicle = expensesOneArray.filter(one => one.category === "Vehicle");
    let TotalVehicle = Vehicle.reduce((a, b) => a + b.amount, 0);

    let VehiclePercent = (TotalVehicle / incomeOneTotal) * 100;

    return Math.round(VehiclePercent);
  }

  console.log("Vehicle Takes " + Vehicle() + "%");

  function Clothing() {
    const Clothing = expensesOneArray.filter(
      one => one.category === "Clothing"
    );
    let TotalClothing = Clothing.reduce((a, b) => a + b.amount, 0);

    let ClothingPercent = (TotalClothing / incomeOneTotal) * 100;

    return Math.round(ClothingPercent);
  }

  console.log("Clothing Takes " + Clothing() + "%");

  function Entertainment() {
    const Entertainment = expensesOneArray.filter(
      one => one.category === "Entertainment"
    );
    let TotalEntertainment = Entertainment.reduce((a, b) => a + b.amount, 0);

    let EntertainmentPercent = (TotalEntertainment / incomeOneTotal) * 100;

    return Math.round(EntertainmentPercent);
  }

  console.log("Entertainment Takes " + Entertainment() + "%");

  function Other() {
    const Other = expensesOneArray.filter(one => one.category === "Other");
    let TotalOther = Other.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalOther);

    let OtherPercent = (TotalOther / incomeOneTotal) * 100;

    return Math.round(OtherPercent);
  }

  console.log("Other " + Math.round(Other()) + "%");

  // Percentage of All Expenses from Income

  function Expensepercentage() {
    const div = ExpensesOneTotal / incomeOneTotal;

    const percent = div * 100;
    // console.log(percent);

    return Math.round(percent);

    // .toFixed(1)
  }
  console.log("Expenses in total takes " + Expensepercentage() + "%");

  // Percentage of Income Left
  function incomePercentage() {
    const div = ExpensesOneTotal / incomeOneTotal;

    const percent = div * 100;

    let incomePercent = 100 - percent;

    return Math.round(incomePercent);
  }

  console.log(" Income in total takes " + incomePercentage() + "%");

  return (
    <div className="detailed-list">
      <div className="analysis">
        <div
          className="analysis-wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "98%",
            alignItems: "center"
          }}
        >
          <ul className="analysis-summary">
            <li>Income ~ &#8358;{Commas(incomeOneTotal)}</li>
            <li>Expenses ~ &#8358;{Commas(ExpensesOneTotal)}</li>
            <li
              style={{
                backgroundColor: AccountOneBalance >= 0 ? "#32cd32" : "#ff0000",
                color: "white",
                padding: "4px 10px",
                borderRadius: "0 8px 8px 0"
              }}
            >
              Balance ~ &#8358;{Commas(AccountOneBalance)}
            </li>
          </ul>
          <div className="pie-chart">
            <div className="dummy-pie"></div>
            {/* <ul>
              <li>Income : {incomePercentage()}%</li>
              <li>Expenses : {Expensepercentage()}%</li>
              <li>Feeding : {Feeding()}%</li>
              <li>Transportation : {Transportation()}%</li>
              <li>HealthCare : {HealthCare()}%</li>
              <li>Telephone & Internet : {Telephone()}%</li>
              <li>Education : {Feeding()}%</li>
              <li>Other : {Other()}%</li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className="detailed-list-head">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Amount</h4>
        <h4>Category</h4>
      </div>
      <div>
        {TransactionOne.map((list, index) => (
          <div className="det-list" key={index}>
            <ul
              className="list"
              style={{
                color: list.type === "Income" ? "#32cd32" : "#ff0000"
              }}
            >
              <li>{list.date}</li>
              <li>{list.name}</li>
              <li>{Commas(list.amount)}</li>
              <li style={{ fontSize: "12px" }}>{list.category}</li>
            </ul>
          </div>
        ))}
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
