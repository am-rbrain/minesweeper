import React from "react";
import GameBox from "../../components/GameBox/GameBox";
import ScoreResult from "../../components/ScoreResult/ScoreResult";
import Welcome from "../../components/Welcome/Welcome";
import useGame from "../../hooks/game-hook";
import Page from "../../layout/page";
import Congratulations from "../../components/Congratulations/Congratulations";
import { Div } from "../../components/Grid/Grid";
import { ShuffleButton } from "../../components/Button/Button";

import "./index.scss";

const Game = () => {
  const {
    boxes,
    destroyed,
    maxScore,
    score,
    winner,
    populateBoxes,
    selectedBoxHandler,
  } = useGame();

  return (
    <Page>
      <Div className="row">
        <Div className="col-lg-12 game">
          {!winner && (
            <GameBox
              selectedBoxHandler={selectedBoxHandler}
              boxes={boxes}
              destroyed={destroyed}
            />
          )}
          {winner && <Congratulations />}
          <ShuffleButton
            placeholder="Shuffle"
            onClick={populateBoxes}
            winner={winner}
            destroyed={destroyed}
          />
          <Welcome />
          <ScoreResult
            maxScore={maxScore}
            score={score}
            destroyed={destroyed}
          />
        </Div>
      </Div>
    </Page>
  );
};

export default Game;
