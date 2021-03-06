import React, { useContext, useState } from "react";
import { AccountOneContext } from "../Contexts/AccountOne";
// import { AccountTwoContext } from "../Contexts/AccountTwo";
// import { useHistory } from "react-router-dom";

export default function Settings() {

  // ALL CODES COMMENTED ARE BECAUSE I DONT KNOW HOW TO DELETE ALL ITEMS FROM A DATABASE, THE CODES WORKED WHEN DATA WAS STORED IN STATE
  
  // let history = useHistory();
  //alert name when changed
  const [alertName, setalertName] = useState(false);

  const { inputName, setinputName, setName} = useContext(
    AccountOneContext
  );

  // const [TransactionOne, setTransactionOne] = valueTransactionOne;

  // const { valueTransactionTwo } = useContext(AccountTwoContext);

  // const [TransactionTwo, setTransactionTwo] = valueTransactionTwo;

  // const [Modal, setModal] = useState(true);
  // const [ModalTwo, setModalTwo] = useState(true);

  // function handleDelete() {
  //   const newAccountOne = TransactionOne.filter(
  //     trans => trans === TransactionOne
  //   );
  //   setTransactionOne(newAccountOne);
  //   setModal(true);
  //   history.push("/account-one");
  // }
  // function deleteItem() {
  //   setModal(false);
  // }

  // function handleDeleteTwo() {
  //   const newAccountTwo = TransactionTwo.filter(
  //     trans => trans === TransactionTwo
  //   );
  //   setTransactionTwo(newAccountTwo);
  //   setModalTwo(true);
  //   history.push("/account-two");
  // }
  // function deleteItemTwo() {
  //   setModalTwo(false);
  // }

  return (
    <div className="settings-page">
      {/* <div className={Modal ? "modal" : "modal close-modal"}>
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
          </div> */}
          {/* <div className="modal-footer">
            <div></div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div> */}

      {/* <div className={ModalTwo ? "modal-two" : "modal-two close-modal"}>
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
      </div> */}

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
            // history.push("/");
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
      {/* <section className="delete-accounts">
        <div>
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
            Delete Accounts{" "}
          </h4>
        </div>
        <div className="delete-accounts-wrap">
          <div style={{ display: "flex", flexDirection: "column" }}>
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
      </section> */}
    </div>
  );
}
