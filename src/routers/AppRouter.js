import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { MainScreen } from "../screens/MainScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
