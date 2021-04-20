import React, { useEffect, useState } from "react";

import {
  getRankingsRequest,
  getRankingStatsRequest,
} from "../../http/requests";
import Page from "../../layout/page";
import Pagination from "../../components/Pagination/Pagination";
import Stats from "../../components/Stats/Stats";
import List from "../../components/Attendants/List";
import { Div } from "../../components/Grid/Grid";
import "./index.scss";

const Rankings = () => {
  const [{ rankings, count, stats }, setState] = useState({
    rankings: [],
    count: 0,
    stats: {},
  });

  const getGameAttendandsStats = async (page) => {
    try {
      const response = await getRankingsRequest(page);
      setState((prevState) => {
        return {
          ...prevState,
          rankings: response.rankings,
          count: response.count,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getRankingStats = async () => {
    try {
      const response = await getRankingStatsRequest();
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
    getGameAttendandsStats();
    getRankingStats();
  }, []);

  return (
    <Page>
      <Div className="row justify-content-center">
        <Div className="col-lg-6 results">
          <Stats
            stats={[
              {
                label: "Players Attended",
                value: stats.playersAttended,
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
          <List rankings={rankings} />
          <Pagination
            pageChangeHandler={getGameAttendandsStats}
            count={count}
            pageSize={10}
          />
        </Div>
      </Div>
    </Page>
  );
};

export default Rankings;
