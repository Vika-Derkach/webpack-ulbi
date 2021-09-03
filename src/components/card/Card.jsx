import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContributors, getCurrentRepo } from "../actions/repos";
import "./card.less";
const Card = (props) => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState({ owner: {} });
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
    getContributors(username, reponame, setContributors);
  }, []);
  console.log(repo);
  return (
    <div>
      <button onClick={() => props.history.goBack()} className="back-btn btn">
        BACK
      </button>

      <div className="card">
        <div class="card-body">
          {" "}
          <img src={repo.owner.avatar_url} alt="" />
          <div className="name card-title">{repo.name}</div>
          <div className="stars">{repo.stargazers_count}</div>
        </div>
      </div>
      {contributors.map((c, index) => (
        <div>
          {index + 1}. {c.login}
        </div>
      ))}
    </div>
  );
};
export default Card;
