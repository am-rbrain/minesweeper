import React from "react";
import { Div } from "../Grid/Grid";

import "./ScoreResult.scss";

const ScoreResult = (props) => {
  const { destroyed, maxScore, score } = props;
  return (
    <Div className="scoreResult">
      {!destroyed && (
        <Div className="score">
          <Div className="box actualScore">{score}</Div>
          <Div className="box totalScore">{maxScore}</Div>
        </Div>
      )}
      {destroyed && <Div className="lost">Game Over, Sorry 😔</Div>}
    </Div>
  );
};

export default ScoreResult;
