import React, { useEffect, useState } from "react";

import { myGameResultsRequest, myGameStatsRequest } from "../../http/requests";
import Page from "../../layout/page";
import List from "../../components/Results/List";
import Pagination from "../../components/Pagination/Pagination";
import Stats from "../../components/Stats/Stats";
import { Div } from "../../components/Grid/Grid";
import "./index.scss";

const Results = () => {
  const [{ results, count, stats }, setState] = useState({
    results: [],
    count: 0,
    stats: {},
  });

  const getMyGameResults = async (page) => {
    try {
      const response = await myGameResultsRequest(page);
      setState((prevState) => {
        return {
          ...prevState,
          results: response.results.rows,
          count: response.results.count,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getMyGameStats = async () => {
    try {
      const response = await myGameStatsRequest();
      setState((prevState) => {
        return {
          ...prevState,
          stats: response,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyGameResults();
    getMyGameStats();
  }, []);

  return (
    <Page>
      <Div className="row justify-content-center">
        <Div className="col-lg-6 results">
          <Stats
            stats={[
              {
                label: "Games Played",
                value: stats.gamesPlayed,
              },
              {
                label: "Minutes Played",
                value: stats.minutesPlayed,
              },
              {
                label: "Average Score",
                value: stats.averageScore,
              },
            ]}
          />
          <List results={results} />
          <Pagination
            pageChangeHandler={getMyGameResults}
            count={count}
            pageSize={10}
          />
        </Div>
      </Div>
    </Page>
  );
};

export default Results;
