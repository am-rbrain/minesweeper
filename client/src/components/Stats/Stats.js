import React from "react";
import { Div } from "../Grid/Grid";
import "./Stats.scss";

const Stats = (props) => {
  const { stats } = props;

  return (
    <Div className="stats">
      {stats.map((el, index) => {
        return (
          <Div className="statWrapper" key={index}>
            <Div className="statBox">
              <Div className="statTitle">{el.label}</Div>
              <Div className="statValue">{el.value}</Div>
            </Div>
          </Div>
        );
      })}
    </Div>
  );
};

export default Stats;
