import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/home/HomePage";
import { ProductPage } from "./components/product/ProductPage";
import { GoogleAuthCallback } from "./components/common/GoogleCallback";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth/google/callback">
            <GoogleAuthCallback />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
