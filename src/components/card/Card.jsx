import React from "react";
//import "./repo.less";
const Card = (props) => {
  const repo = props.repo;
  return (
    <div className="repo">
      <button onClick={() => props.history.goBack()} className="back-btn">
        Back
      </button>
    </div>
  );
};
export default Card;
