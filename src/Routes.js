import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Myinfo from './components/Myinfo'
import Mykeyword from './components/Mykeyword'
import MykeywordGroup from './components/MykeywordGroup'
import ForgotPassword from './components/ForgotPassword'
import MykeywordCreate from './components/MykeywordCreate'
import MykeywordGroupCreate from './components/MykeywordGroupCreate'

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
        <Route path="/mykeyword_group">
        <MykeywordGroup />
        </Route>

        <Route path="/mykeyword_create">
        <MykeywordCreate />
        </Route>
        <Route path="/mykeyword_group_create">
        <MykeywordGroupCreate />
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
    </Switch>
  );
}