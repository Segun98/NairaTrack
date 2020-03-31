import React, { useContext } from "react";
import { AccountOneContext } from "../../Contexts/AccountOne";
import Commas from "../../Commas";
import { Pie } from "react-chartjs-2";

export default function DetailedListOne() {
  const {
    valueTransactionOne,
    AccountOneBalance,
    expensesOneArray,
    incomeOneTotal,
    ExpensesOneTotal
  } = useContext(AccountOneContext);

  const [TransactionOne] = valueTransactionOne;

  if (ExpensesOneTotal === 0 && incomeOneTotal === 0 && AccountOneBalance === 0)
    return <div style={{ height: "100vh" }}> {""}</div>;

  // List according to time of transaction , no longer needed.
  // const arranged = TransactionOne.sort((a, b) => new Date(a.time) - new Date(b.time));

  //Pie chart Library

  const data = {
    labels: ["Income " + incomePercentage() + "%"],
    datasets: [
      {
        data: [incomePercentage()],
        backgroundColor: ["#32cd32"],
        hoverBackgroundColor: ["#333"]
      }
    ]
  };

  // Percentage Calculation for each Category

  function Education() {
    const Education = expensesOneArray.filter(
      one => one.category === "Education"
    );
    let TotalEducation = Education.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalEducation);

    let educationPercent = (TotalEducation / incomeOneTotal) * 100;

    const finalEdu = Math.round(educationPercent);

    if (finalEdu === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Education " + finalEdu + "%");
      data.datasets[0].data.push(finalEdu);
      data.datasets[0].backgroundColor.push("#FF6384");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Education();

  function Feeding() {
    const Feeding = expensesOneArray.filter(one => one.category === "Feeding");
    let TotalFeeding = Feeding.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalFeeding);

    let feedingPercent = (TotalFeeding / incomeOneTotal) * 100;
    const finalFeeding = Math.round(feedingPercent);

    if (finalFeeding === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Feeding " + finalFeeding + "%");
      data.datasets[0].data.push(finalFeeding);
      data.datasets[0].backgroundColor.push("#36A2EB");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Feeding();

  // console.log("Feeding Takes " + Feeding() + "%");

  function Telephone() {
    const Telephone = expensesOneArray.filter(
      one => one.category === "Telephone & Internet"
    );
    let TotalTelephone = Telephone.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalTelephone);

    let telephonePercent = (TotalTelephone / incomeOneTotal) * 100;

    const finalTelephone = Math.round(telephonePercent);

    if (finalTelephone === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Telephone " + finalTelephone + "%");
      data.datasets[0].data.push(finalTelephone);
      data.datasets[0].backgroundColor.push("#FFCE56");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }

  Telephone();

  // console.log("Telephone Takes " + Telephone() + "%");

  function HealthCare() {
    const HealthCare = expensesOneArray.filter(
      one => one.category === "HealthCare"
    );
    let TotalHealthCare = HealthCare.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalHealthCare);

    let HealthCarePercent = (TotalHealthCare / incomeOneTotal) * 100;

    const finalHealthCare = Math.round(HealthCarePercent);

    if (finalHealthCare === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("HealthCare " + finalHealthCare + "%");
      data.datasets[0].data.push(finalHealthCare);
      data.datasets[0].backgroundColor.push("#B21F00");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  HealthCare();

  // console.log("HealthCare Takes " + HealthCare() + "%");

  function Transportation() {
    const Transportation = expensesOneArray.filter(
      one => one.category === "Transportation"
    );
    let TotalTransportation = Transportation.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalTransportation);

    let TransportationPercent = (TotalTransportation / incomeOneTotal) * 100;

    const finalTransportation = Math.round(TransportationPercent);

    if (finalTransportation === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Transportation " + finalTransportation + "%");
      data.datasets[0].data.push(finalTransportation);
      data.datasets[0].backgroundColor.push("#C9DE00");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Transportation();

  // console.log("Transportation Takes " + Transportation() + "%");

  function Rent() {
    const Rent = expensesOneArray.filter(one => one.category === "Rent");
    let TotalRent = Rent.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalRent);

    let RentPercent = (TotalRent / incomeOneTotal) * 100;
    // console.log(RentPercent);

    const finalRent = Math.round(RentPercent);

    if (finalRent === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Rent " + finalRent + "%");
      data.datasets[0].data.push(finalRent);
      data.datasets[0].backgroundColor.push("#FFC0CB");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Rent();
  // console.log("Rent Takes " + Rent() + "%");

  function Household() {
    const Household = expensesOneArray.filter(
      one => one.category === "Household"
    );
    let TotalHousehold = Household.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalRent);

    let HouseholdPercent = (TotalHousehold / incomeOneTotal) * 100;
    // console.log(RentPercent);
    const finalHousehold = Math.round(HouseholdPercent);

    if (finalHousehold === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Household " + finalHousehold + "%");
      data.datasets[0].data.push(finalHousehold);
      data.datasets[0].backgroundColor.push("#6800B4");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Household();
  // console.log("Household Takes " + Household() + "%");

  function Vehicle() {
    const Vehicle = expensesOneArray.filter(one => one.category === "Vehicle");
    let TotalVehicle = Vehicle.reduce((a, b) => a + b.amount, 0);

    let VehiclePercent = (TotalVehicle / incomeOneTotal) * 100;
    const finalVehicle = Math.round(VehiclePercent);

    if (finalVehicle === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Vehicle " + finalVehicle + "%");
      data.datasets[0].data.push(finalVehicle);
      data.datasets[0].backgroundColor.push("#501800");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Vehicle();
  // console.log("Vehicle Takes " + Vehicle() + "%");

  function Clothing() {
    const Clothing = expensesOneArray.filter(
      one => one.category === "Clothing"
    );
    let TotalClothing = Clothing.reduce((a, b) => a + b.amount, 0);

    let ClothingPercent = (TotalClothing / incomeOneTotal) * 100;
    const finalClothing = Math.round(ClothingPercent);

    if (finalClothing === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Clothing " + finalClothing + "%");
      data.datasets[0].data.push(finalClothing);
      data.datasets[0].backgroundColor.push("#4B5000");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Clothing();
  // console.log("Clothing Takes " + Clothing() + "%");

  function Entertainment() {
    const Entertainment = expensesOneArray.filter(
      one => one.category === "Entertainment"
    );
    let TotalEntertainment = Entertainment.reduce((a, b) => a + b.amount, 0);

    let EntertainmentPercent = (TotalEntertainment / incomeOneTotal) * 100;
    const finalEntertainment = Math.round(EntertainmentPercent);

    if (finalEntertainment === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Entertainment " + finalEntertainment + "%");
      data.datasets[0].data.push(finalEntertainment);
      data.datasets[0].backgroundColor.push("#175000");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Entertainment();
  // console.log("Entertainment Takes " + Entertainment() + "%");

  function Other() {
    const Other = expensesOneArray.filter(one => one.category === "Other");
    let TotalOther = Other.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalOther);

    let OtherPercent = (TotalOther / incomeOneTotal) * 100;
    const finalOther = Math.round(OtherPercent);

    if (finalOther === 0) {
      return null;
    } else {
      //Push to the Pie Chart Library
      data.labels.push("Other " + finalOther + "%");
      data.datasets[0].data.push(finalOther);
      data.datasets[0].backgroundColor.push("#003350");
      data.datasets[0].hoverBackgroundColor.push("#333");
    }
  }
  Other();
  // console.log("Other " + Math.round(Other()) + "%");

  // Percentage of All Expenses from Income

  // function Expensepercentage() {
  //   const div = ExpensesOneTotal / incomeOneTotal;

  //   const percent = div * 100;
  //   // console.log(percent);

  //   return Math.round(percent);

  //   // .toFixed(1)
  // }
  // // console.log("Expenses in total takes " + Expensepercentage() + "%");

  // Percentage of Income Left
  function incomePercentage() {
    const div = ExpensesOneTotal / incomeOneTotal;

    const percent = div * 100;

    let incomePercent = 100 - percent;
    return Math.round(incomePercent);
  }
  // incomePercentage();
  // console.log(" Income in total takes " + incomePercentage() + "%");

  return (
    <div className="detailed-list">
      <div className="analysis">
        <div
          className="analysis-wrap"
          style={{
            margin: "20px auto",
            width: "50%",
            textAlign: "center"
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
        </div>
      </div>

      <div>
        <Pie
          data={data}
          width={200}
          height={200}
          options={{
            title: {
              display: true,
              text: "Expenses By Category",
              fontSize: 18
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
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
