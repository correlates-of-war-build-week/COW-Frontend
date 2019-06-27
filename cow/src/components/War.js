import React from "react";
import { Card, Row, Col } from "reactstrap";

const War = props => {
  const {
    war: { stateabb, ccode, pred_proba }
  } = props;
  return (
    <div className="warCard">
      <Card>
        {/* <div>{StateName}</div> */}
        <div>{stateabb}</div>
        <div>{ccode}</div>
        <div>{pred_proba}</div>
      </Card>
    </div>
  );
};

export default War;
