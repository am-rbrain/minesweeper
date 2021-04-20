import React from "react";
import { Ul } from "../Grid/Grid";
import AttendantItem from "./Item";

import "./List.scss";

const List = (props) => {
  const { rankings } = props;

  return (
    <Ul className="list">
      {rankings.map((el, index) => {
        return (
          <AttendantItem
            key={index}
            fullname={el.fullname}
            bestScore={el.bestScore}
          />
        );
      })}
    </Ul>
  );
};

export default List;
