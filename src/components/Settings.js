import React, { useContext, useState } from "react";
import { AccountOneContext } from "../Contexts/AccountOne";

export default function Settings() {
  const [alertName, setalertName] = useState(false);
  //    Name State
  const { inputName, setinputName, setName } = useContext(AccountOneContext);

  return (
    <div className="settings-page">
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
            setalertName(true)
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
      {/* <section className="change-personal"></section>
      <section className="change-business"></section>
      <section className="delete-account"></section> */}
    </div>
  );
}
