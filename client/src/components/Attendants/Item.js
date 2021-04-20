import React from "react";
import { Div, Li, Paragraph, Small } from "../Grid/Grid";

import "./Item.scss";

const Item = (props) => {
  const { fullname, bestScore } = props;

  return (
    <Li className="item">
      <Div className="boxEmoji">😊</Div>
      <Div className="box">
        <Paragraph className="label">{fullname}</Paragraph>
      </Div>
      <Div className="box">
        <Paragraph className="label">
          <Small>Best Score: </Small> {bestScore}
        </Paragraph>
      </Div>
    </Li>
  );
};

export default Item;
