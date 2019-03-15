import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Courses from "../Routes/Categories";
import Header from "./Header";
import Careers from "../Routes/Careers";

export default () => (
  <>
    <GlobalStyles />
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/careers" component={Careers} />
        </Switch>
      </>
    </Router>
  </>
);
