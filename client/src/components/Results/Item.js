import React from "react";

import moment from "moment";
import { Div, Li, Paragraph, Small } from "../Grid/Grid";

const Item = (props) => {
  const { score, max_score, duration, end } = props;

  return (
    <Li className="item">
      <Div className="boxEmoji">😊</Div>
      <Div className="box">
        <Paragraph className="label">
          <Small>Score: </Small> {score}
        </Paragraph>
      </Div>
      <Div className="box">
        <Paragraph className="label">
          <Small>Max Score: </Small> {max_score}
        </Paragraph>
      </Div>
      <Div className="box">
        <Paragraph className="label">
          <Small>Duration: </Small> {duration}s
        </Paragraph>
      </Div>
      <Div className="box">
        <Paragraph className="label">
          <Small> {moment(end).format("MMM Do YY hh:mm:ss")}</Small>
        </Paragraph>
      </Div>
    </Li>
  );
};

export default Item;
