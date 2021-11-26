import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { DashBoardRouter } from "./DashBoardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={DashBoardRouter}></Route>
        </Switch>
      </div>
    </Router>
  );
};
