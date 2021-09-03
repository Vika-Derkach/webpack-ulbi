import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./app.less";
import Card from "./card/Card";
import Error from "./main/Error";
import Main from "./main/Main";
export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.repos.count);

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/card/:username/:reponame" component={Card} />
          <Route path="/error" component={Error} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
