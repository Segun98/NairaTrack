import React, { useContext, useState } from "react";
import { AccountOneContext } from "../Contexts/AccountOne";
import { AccountTwoContext } from "../Contexts/AccountTwo";

export default function Settings() {
  const [alertName, setalertName] = useState(false);
  //    Name State
  const {
    inputName,
    setinputName,
    setName,
    valueOneAccountOne,
    valueTwoAccountOne
  } = useContext(AccountOneContext);

  const { valueOneAccountTwo, valueTwoAccountTwo } = useContext(
    AccountTwoContext
  );

  const [IncomeOne, setIncomeOne] = valueOneAccountOne;
  const [ExpensesOne, setExpensesOne] = valueTwoAccountOne;

  const [IncomeTwo, setIncomeTwo] = valueOneAccountTwo;
  const [ExpensesTwo, setExpensesTwo] = valueTwoAccountTwo;

  const [Modal, setModal] = useState(true);
  const [ModalTwo, setModalTwo] = useState(true);

  function handleDelete() {
    const newAccountOne = [...IncomeOne, ...ExpensesOne];
    newAccountOne.splice(0, newAccountOne.length);
    setIncomeOne(newAccountOne);
    setExpensesOne(newAccountOne);
    setModal(true);
  }
  function deleteItem() {
    setModal(false);
  }

  function handleDeleteTwo() {
    const newAccountTwo = [...IncomeTwo, ...ExpensesTwo];
    newAccountTwo.splice(0, newAccountTwo.length);
    setIncomeTwo(newAccountTwo);
    setExpensesTwo(newAccountTwo);
    setModalTwo(true);
  }
  function deleteItemTwo() {
    setModalTwo(false);
  }

  return (
    <div className="settings-page">
      <div className={Modal ? "modal" : "modal close-modal"}>
        <div className="modal-content">
          <div className="modal-head">
            <p>Delete Account</p>
            <p
              onClick={() => {
                setModal(true);
              }}
            >
              &times;
            </p>
          </div>
          <div className="modal-body">
            <h4>
              Are you sure you want to delete PERSONAL ACCOUNT? All data will be
              lost and cannot be recovered.
            </h4>
          </div>
          <div className="modal-footer">
            <div></div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>

      <div className={ModalTwo ? "modal-two" : "modal-two close-modal"}>
        <div className="modal-content">
          <div className="modal-head">
            <p>Delete Account</p>
            <p
              onClick={() => {
                setModalTwo(true);
              }}
            >
              &times;
            </p>
          </div>
          <div className="modal-body">
            <h4>
              Are you sure you want to delete BUSINESS ACCOUNT? All data will be
              lost and cannot be recovered.
            </h4>
          </div>
          <div className="modal-footer">
            <div></div>
            <button onClick={handleDeleteTwo}>Delete</button>
          </div>
        </div>
      </div>

      <section className="change-name">
        <div>
          <h4 style={{ textAlign: "center", marginBottom: "40px" }}>
            Change Name{" "}
          </h4>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            setName(inputName);
            setalertName(true);
          }}
        >
          <input
            className="setting-input"
            type="text"
            placeholder="click..."
            value={inputName}
            onChange={e => {
              e.preventDefault();
              setinputName(e.target.value);
            }}
          />
          <i className="fas fa-pencil-alt"></i>
          <button type="submit">Submit</button>
        </form>
        <div
          style={{
            display: alertName ? "block" : "none",
            textAlign: "center",
            marginTop: "16px",
            color: "green"
          }}
        >
          Name changed successfuly!
        </div>
      </section>
      <section className="delete-accounts">
        <div>
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
            Delete Accounts{" "}
          </h4>
        </div>
        <div className="delete-accounts-wrap">
          <div style={{ display: "flex", flexDirection: "column"}}>
            <h3>Personal Account</h3>
            <p>Delete all transactions data from Personal Account</p>
          </div>
          <button
            style={{
              border: "none",
              color: "white",
              background: "red",
              marginLeft: "5px",
              cursor: "pointer",
              fontSize: "14px"
            }}
            title="Delete"
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </section>

      <section className="delete-accounts">
        <div className="delete-accounts-wrap">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Business Account</h3>
            <p>Delete all transactions data from Business Account</p>
          </div>
          <button
            style={{
              border: "none",
              color: "white",
              background: "red",
              marginLeft: "5px",
              cursor: "pointer",
              fontSize: "14px"
            }}
            title="Delete"
            onClick={deleteItemTwo}
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  );
}
