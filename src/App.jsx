import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { GoogleAuthCallback } from "./components/signUp/GoogleCallback";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth/google/callback">
            <GoogleAuthCallback />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
