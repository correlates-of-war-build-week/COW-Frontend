import React from "react";

const War = props => {
  const {
    war: { StateName, stateabb, ccode, pred_proba }
  } = props;
  return (
    <div>
      <h1>inside War</h1>
      <div>{StateName}</div>
      <div>{stateabb}</div>
      <div>{ccode}</div>
      <div>{pred_proba}</div>
    </div>
  );
};

export default War;
