import React from "react";
import { Div } from "../Grid/Grid";
import { useLocation } from "react-router-dom";

import "./GameBox.scss";

const GameBox = (props) => {
  const { boxes, destroyed, selectedBoxHandler } = props;

  const { hash } = useLocation();

  return (
    <Div className="gameBox">
      {boxes.map((el, index) => {
        const boxClasses = ["smallBox"];

        if (el.isSelected) {
          boxClasses.push("isSelected");
        }

        if (destroyed) {
          boxClasses.push("isSelected");
        }

        if (destroyed && !el.isBomb) {
          boxClasses.push("fadeAway");
        }

        return (
          <Div
            className="smallBoxWrapper"
            key={index}
            onClick={() => (!el.isSelected ? selectedBoxHandler(el.id) : {})}
          >
            <Div className={boxClasses.join(" ")}>
              {hash === "#win-mode" && el.isBomb && <b>B</b>}
              {!el.isSelected && !destroyed && (
                <Div className="scaryEmoji emoji">😨</Div>
              )}
              {!el.isBomb && <Div className="mainEmoji emoji">😊</Div>}
              {el.isBomb && <Div className="mainEmoji emoji">💥</Div>}
            </Div>
          </Div>
        );
      })}
    </Div>
  );
};

export default GameBox;
