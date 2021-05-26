import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ListUser from "../pages/ListUser";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users/add" component={RegisterUser} />
        <Route path="/users/login" component={LoginUser} />
        <Route path="/users" component={ListUser} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};
export default Routes;
