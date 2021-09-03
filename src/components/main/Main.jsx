import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../reducers/reposReducer";
import { createPages } from "../../utils/pagesCreator";
import { getRepos } from "../actions/repos";
import "./main.less";
import Repo from "./repo/repo";
const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const perPage = useSelector((state) => state.repos.perPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const isFetchError = useSelector((state) => state.repos.isFetchError);

  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);
  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
    dispatch(currentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  //   if (isFetchError) {
  //     return <Redirect to="/error" />;
  //   }

  return (
    <div>
      {isFetchError && (
        <div class="alert alert-danger" role="alert">
          There was an error!!! Please, reload the page!
        </div>
      )}
      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Type repo name"
          className="search-input"
        />
        <button onClick={() => searchHandler()} className="search-btn">
          Search
        </button>
      </div>
      {isFetching === false ? (
        repos.map((repo) => <Repo key={repo.node_id} repo={repo} />)
      ) : (
        <div className="fetching"></div>
      )}
      <div className="pages">
        {pages.map((page, index) => (
          <span
            className={currentPage == page ? "current-page" : "page"}
            key={index}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {" "}
            {page}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Main;
