import React from "react";

function Error(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => props.history.push("/")}>GO TO MAIN PAGE</button>
      Error
    </div>
  );
}

export default Error;
