import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import "./main.less";
import Repo from "./repo/repo";
const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  useEffect(() => {
    dispatch(getRepos());
  }, []);
  return (
    <div>
      {repos.map((repo) => {
        return <Repo repo={repo} />;
      })}
    </div>
  );
};
export default Main;
