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
    labels: ["Income"],
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
    if (incomeOneTotal === 0)return null 
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
      //unshift to the Pie Chart Library
      data.labels.unshift("Education " + finalEdu + "%");
      data.datasets[0].data.unshift(finalEdu);
      data.datasets[0].backgroundColor.unshift("#FF6384");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Education();

  function Feeding() {
    if (incomeOneTotal === 0)return null 
    const Feeding = expensesOneArray.filter(one => one.category === "Feeding");
    let TotalFeeding = Feeding.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalFeeding);

    let feedingPercent = (TotalFeeding / incomeOneTotal) * 100;
    const finalFeeding = Math.round(feedingPercent);

    if (finalFeeding === 0) {
      return null;
    } else {
      //unshift to the Pie Chart Library
      data.labels.unshift("Feeding " + finalFeeding + "%");
      data.datasets[0].data.unshift(finalFeeding);
      data.datasets[0].backgroundColor.unshift("#36A2EB");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Feeding();

  // console.log("Feeding Takes " + Feeding() + "%");

  function Telephone() {
    if (incomeOneTotal === 0)return null 
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
      //unshift to the Pie Chart Library
      data.labels.unshift("Telephone " + finalTelephone + "%");
      data.datasets[0].data.unshift(finalTelephone);
      data.datasets[0].backgroundColor.unshift("#FFCE56");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }

  Telephone();

  // console.log("Telephone Takes " + Telephone() + "%");

  function HealthCare() {
    if (incomeOneTotal === 0)return null 
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
      //unshift to the Pie Chart Library
      data.labels.unshift("HealthCare " + finalHealthCare + "%");
      data.datasets[0].data.unshift(finalHealthCare);
      data.datasets[0].backgroundColor.unshift("#B21F00");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  HealthCare();

  // console.log("HealthCare Takes " + HealthCare() + "%");

  function Transportation() {
    if (incomeOneTotal === 0)return null 
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
      //unshift to the Pie Chart Library
      data.labels.unshift("Transportation " + finalTransportation + "%");
      data.datasets[0].data.unshift(finalTransportation);
      data.datasets[0].backgroundColor.unshift("#C9DE00");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Transportation();

  // console.log("Transportation Takes " + Transportation() + "%");

  function Rent() {
    if (incomeOneTotal === 0)return null 
    const Rent = expensesOneArray.filter(one => one.category === "Rent");
    let TotalRent = Rent.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalRent);

    let RentPercent = (TotalRent / incomeOneTotal) * 100;
    // console.log(RentPercent);

    const finalRent = Math.round(RentPercent);

    if (finalRent === 0) {
      return null;
    } else {
      //unshift to the Pie Chart Library
      data.labels.unshift("Rent " + finalRent + "%");
      data.datasets[0].data.unshift(finalRent);
      data.datasets[0].backgroundColor.unshift("#FFC0CB");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Rent();
  // console.log("Rent Takes " + Rent() + "%");

  function Household() {
    if (incomeOneTotal === 0)return null 
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
      //unshift to the Pie Chart Library
      data.labels.unshift("Household " + finalHousehold + "%");
      data.datasets[0].data.unshift(finalHousehold);
      data.datasets[0].backgroundColor.unshift("#6800B4");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Household();
  // console.log("Household Takes " + Household() + "%");

  function Vehicle() {
    if (incomeOneTotal === 0)return null 
    const Vehicle = expensesOneArray.filter(one => one.category === "Vehicle");
    let TotalVehicle = Vehicle.reduce((a, b) => a + b.amount, 0);

    let VehiclePercent = (TotalVehicle / incomeOneTotal) * 100;
    const finalVehicle = Math.round(VehiclePercent);

    if (finalVehicle === 0) {
      return null;
    } else {
      //unshift to the Pie Chart Library
      data.labels.unshift("Vehicle " + finalVehicle + "%");
      data.datasets[0].data.unshift(finalVehicle);
      data.datasets[0].backgroundColor.unshift("#501800");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Vehicle();
  // console.log("Vehicle Takes " + Vehicle() + "%");

  function Clothing() {
    if (incomeOneTotal === 0)return null 
    const Clothing = expensesOneArray.filter(
      one => one.category === "Clothing"
    );
    let TotalClothing = Clothing.reduce((a, b) => a + b.amount, 0);

    let ClothingPercent = (TotalClothing / incomeOneTotal) * 100;
    const finalClothing = Math.round(ClothingPercent);

    if (finalClothing === 0) {
      return null;
    } else {
      //unshift to the Pie Chart Library
      data.labels.unshift("Clothing " + finalClothing + "%");
      data.datasets[0].data.unshift(finalClothing);
      data.datasets[0].backgroundColor.unshift("#4B5000");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Clothing();
  // console.log("Clothing Takes " + Clothing() + "%");

  function Entertainment() {
    if (incomeOneTotal === 0)return null 
    const Entertainment = expensesOneArray.filter(
      one => one.category === "Entertainment"
    );
    let TotalEntertainment = Entertainment.reduce((a, b) => a + b.amount, 0);

    let EntertainmentPercent = (TotalEntertainment / incomeOneTotal) * 100;
    const finalEntertainment = Math.round(EntertainmentPercent);

    if (finalEntertainment === 0) {
      return null;
    } else {
      //unshift to the Pie Chart Library
      data.labels.unshift("Entertainment " + finalEntertainment + "%");
      data.datasets[0].data.unshift(finalEntertainment);
      data.datasets[0].backgroundColor.unshift("#175000");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
    }
  }
  Entertainment();
  // console.log("Entertainment Takes " + Entertainment() + "%");

  function Other() {
    if (incomeOneTotal === 0)return null 
    const Other = expensesOneArray.filter(one => one.category === "Other");
    let TotalOther = Other.reduce((a, b) => a + b.amount, 0);
    // console.log(TotalOther);

    let OtherPercent = (TotalOther / incomeOneTotal) * 100;
    const finalOther = Math.round(OtherPercent);

    if (finalOther === 0) {
      return null;
    } else {
      //unshift to the Pie Chart Library
      data.labels.unshift("Other " + finalOther + "%");
      data.datasets[0].data.unshift(finalOther);
      data.datasets[0].backgroundColor.unshift("#003350");
      data.datasets[0].hoverBackgroundColor.unshift("#333");
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
    if (incomeOneTotal === 0)return null 
    const div = ExpensesOneTotal / incomeOneTotal;

    const percent = div * 100;

    let incomePercent = 100 - percent;
    return Math.round(incomePercent);
  }
  // incomePercentage();
  // console.log(" Income in total takes " + incomePercentage() + "%");

  return (
    <div className="detailed-list">
      <div>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "-50px",
            marginTop: "15px"
          }}
        >
          Expenses By Category
        </h3>
        <Pie
          data={data}
          width={200}
          height={200}
          options={{
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
      <div className="analysis">
        <div
          className="analysis-wrap"
          style={{
            margin: "10px auto",
            width: "95%",
            textAlign: "center"
          }}
        >
          <ul className="analysis-summary">
            <li>Income &#8358;{Commas(incomeOneTotal)}</li>
            <li>Expenses &#8358;{Commas(ExpensesOneTotal)}</li>
            <li
              style={{
                backgroundColor: AccountOneBalance >= 0 ? "#32cd32" : "#ff0000",
                color: "white",
                padding: "4px 10px",
                borderRadius: "0 8px 8px 0"
              }}
            >
              Balance &#8358;{Commas(AccountOneBalance)}
            </li>
          </ul>
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
