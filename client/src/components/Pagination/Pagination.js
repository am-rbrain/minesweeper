import React from "react";
import Pagination from "rc-pagination";
import { Div } from "../Grid/Grid";
import "rc-pagination/assets/index.css";
import "./Pagination.scss";

const RcPagination = (props) => {
  const { pageChangeHandler, count, pageSize } = props;

  return count > pageSize ? (
    <Div className="rc-pagination">
      <Pagination
        pageSize={pageSize}
        total={count}
        onChange={pageChangeHandler}
      />
    </Div>
  ) : (
    ""
  );
};

export default RcPagination;
