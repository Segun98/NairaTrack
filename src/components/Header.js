import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { AccountOneContext } from "../Contexts/AccountOne";

export default function Header() {

  const {
    Name
  } = useContext(AccountOneContext);


  let location = useLocation();
  let history = useHistory();

  // Change text on header based on location
  function headerName() {
    if (location.pathname === "/") {
      return <div className="hi-style">Hi {Name}!</div>;
    } else if (location.pathname === "/account-one") {
      return "Personal Account";
    } else if (location.pathname === "/account-two") {
      return "Business Account";
    } else if (location.pathname === "/about") {
      return "About NairaTrack";
    } else if (location.pathname === "/personal-account-detailed-list") {
      return "Personal Account List";
    } else if (location.pathname === "/business-account-detailed-list") {
      return "Business Account List";
    } else if (location.pathname === "/settings") {
      return "Settings";
    }
  }

  const [Nav, setNav] = useState(true);

  const LinkStyle = {
    textDecoration: "none",
    color: "whitesmoke"
  };
  return (
    <div>
      <header>
        <div className="index-header-wrap">
          <div
            style={{ display: location.pathname === "/" ? "none" : "block" }}
            className="homeNav"
            title="Back"
            onClick={() => {
              history.goBack();
            }}
          >
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="index-header-welcome" style={{ fontSize: "1.2rem" }}>
            {headerName()}
          </div>
          <div
            className="index-menu"
            title="menu"
            onClick={() => {
              setNav(!Nav);
            }}
          >
          <i style={{ display: Nav ? "block" : "none" }} className="fas fa-bars"></i>
            {/* <i
              style={{ display: Nav ? "block" : "none" }}
              className="fas fa-ellipsis-h"
            ></i> */}
            <i
              style={{ display: Nav ? "none" : "block" }}
              className="fas fa-times"
            ></i>
          </div>
        </div>
        
        <div className={Nav ? "navigation" : "navigation open-nav"}>
          <div className="nav">
            <ul>
              <img
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "1rem",
                  marginLeft: "70px",
                  marginBottom: "9px"
                }}
                src="nairatrack-64.png"
                alt="logo"
              />
              <hr />
              <Link style={LinkStyle} to="/">
                <li
                  onClick={() => {
                    setNav(!Nav);
                  }}
                >
                  Home
                </li>
              </Link>
              <Link style={LinkStyle} to="/account-one">
                <li
                  onClick={() => {
                    setNav(!Nav);
                  }}
                >
                  Personal Account
                </li>
              </Link>
              <Link style={LinkStyle} to="/account-two">
                <li
                  onClick={() => {
                    setNav(!Nav);
                  }}
                >
                  Business Account
                </li>
              </Link>
              <Link style={LinkStyle} to="/about">
                <li
                  onClick={() => {
                    setNav(!Nav);
                  }}
                >
                  About
                </li>
              </Link>
              <Link style={LinkStyle} to="/settings">
                <li
                  onClick={() => {
                    setNav(!Nav);
                  }}
                >
                  Settings
                </li>
              </Link>
              <li
                onClick={() => {
                  setNav(!Nav);
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://segunos.tk/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Feature{" "}
                  <span style={{ fontSize: "10px" }}>
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
