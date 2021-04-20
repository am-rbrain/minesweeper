import React from "react";
import { Ul } from "../Grid/Grid";

import Item from "./Item";
import "./List.scss";

const List = (props) => {
  const { results } = props;

  return (
    <Ul className="list">
      {results.map((el, index) => (
        <Item
          key={index}
          score={el.score}
          max_score={el.max_score}
          duration={el.duration}
          end={el.end}
        />
      ))}
    </Ul>
  );
};

export default List;
