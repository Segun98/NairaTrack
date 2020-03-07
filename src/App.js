import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AccountOneProvider } from "./Contexts/AccountOne";
import { AccountTwoProvider } from "./Contexts/AccountTwo";
import Index from "./components/Index"
import AccountOne from "./components/AccountOne/AccountOne";
import AccountTwo from "./components/AccountTwo/AccountTwo";

function App() {
  return (
    <AccountTwoProvider>
      <AccountOneProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/account-one" component={AccountOne} />
              <Route path="/account-two" component={AccountTwo} />
            </Switch>
          </div>
        </Router>
      </AccountOneProvider>
    </AccountTwoProvider>
  );
}

export default App;
