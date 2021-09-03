import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.less";
import Main from "./main/Main";
export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.repos.count);

  return (
    <div className="app">
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </div>
  );
}
