import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/home/HomePage";
import { ProductPage } from "./components/product/ProductPage";
import { CheckoutPage } from "./components/checkout/CheckoutPage";
import { GoogleAuthCallback } from "./components/common/GoogleCallback";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth/google/callback" component={GoogleAuthCallback} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};
