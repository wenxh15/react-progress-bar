import React from "react";
import "./styles.css";

const Fill = (props) => (
  <div className="progress" style={{ width: `${props.percentage}%` }}>
    {props.percentage}%
  </div>
);

export default Fill;
