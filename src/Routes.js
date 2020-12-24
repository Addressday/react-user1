import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Signin from "./components/user/Signin";
import Signup from "./components/user/Signup";
import Myinfo from "./components/user/Myinfo";
import Mykeyword from "./components/keyword/Mykeyword";
import Mygroup from "./components/keyword/Mygroup";
import ForgotPassword from "./components/user/ForgotPassword";
import ForgotId from "./components/user/ForgotId";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <NotFound />
      </Route>
      <Route path="/mykeyword">
        <Mykeyword />
      </Route>
      <Route path="/mygroup">
        <Mygroup />
      </Route>

      <Route path="/myinfo">
        <Myinfo />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/forgot_password">
        <ForgotPassword />
      </Route>
      <Route path="/forgot_id">
        <ForgotId />
      </Route>
    </Switch>
  );
}
