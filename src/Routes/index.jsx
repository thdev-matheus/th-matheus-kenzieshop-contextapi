import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

import Register from "../pages/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
