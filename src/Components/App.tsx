import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Courses from "../Routes/Categories";
import Header from "./Header";
import Clones from "../Routes/Clones";
import Memberships from "../Routes/Memberships";

export default () => (
  <>
    <GlobalStyles />
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/clones" component={Clones} />
          <Route path="/memberships" component={Memberships} />
        </Switch>
      </>
    </Router>
  </>
);
