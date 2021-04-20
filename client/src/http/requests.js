import axios from "./axios";
import { GET, POST } from "./methods";

const headers = () => {
  return {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };
};

export const loginRequest = (data) => {
  const { email, password } = data;

  return axios({
    method: POST,
    url: `/user/login`,
    data: {
      email,
      password,
    },
    headers: headers(),
  });
};

export const signupRequest = (data) => {
  const { fullname, email, password } = data;

  return axios({
    method: POST,
    url: "/user/signup",
    data: {
      fullname,
      email,
      password,
    },
    headers: headers(),
  });
};

export const generateGameDataRequest = () => {
  return axios({
    method: GET,
    url: "/game/generate-game-data",
    headers: headers(),
  });
};

export const registerScoreRequest = (data) => {
  const { maxScore, score, start, end } = data;

  return axios({
    method: POST,
    url: "/game/register-score",
    data: {
      maxScore,
      score,
      start,
      end,
    },
    headers: headers(),
  });
};

export const myGameResultsRequest = (page = 1) => {
  return axios({
    method: GET,
    url: "/game/my-game-results",
    params: {
      page,
    },
    headers: headers(),
  });
};

export const myGameStatsRequest = () => {
  return axios({
    method: GET,
    url: "/game/my-game-stats",
    headers: headers(),
  });
};

export const getRankingsRequest = (page = 1) => {
  return axios({
    method: GET,
    url: "/game/game-rankings",
    params: {
      page,
    },
    headers: headers(),
  });
};

export const getRankingStatsRequest = () => {
  return axios({
    method: GET,
    url: "/game/ranking-stats",
    headers: headers(),
  });
};
