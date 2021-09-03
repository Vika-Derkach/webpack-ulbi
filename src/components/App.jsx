import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../reducers/reposReducer";
import "./app.less";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.repos.count);

  function onCountClick() {
    dispatch(setCount(6));
  }
  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={() => onCountClick()}>COUNT</button>
    </div>
  );
}
