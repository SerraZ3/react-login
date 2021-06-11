import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ListUser from "../pages/ListUser";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";
import { getToken } from "../helpers/session";
const Routes = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(getToken);
  }, []);
  return (
    <Router>
      <Switch>
        <>
          {token ? (
            <>
              <Route path="/users/add" component={RegisterUser} />
              <Route path="/users" component={ListUser} />
            </>
          ) : (
            <Route path="/users/login" component={LoginUser} />
          )}
          <Route path="/" component={Home} />
        </>
      </Switch>
    </Router>
  );
};
export default Routes;
