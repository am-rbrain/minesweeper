import { useEffect, useReducer } from "react";
import _ from "lodash";

import {
  INCREASE_ACTUAL_SCORE,
  RESET_STATE,
  SET_BOXES,
  SET_DESTROYED,
  UPDATE_BOXES,
  WINNER,
} from "../actions";
import {
  generateGameDataRequest,
  registerScoreRequest,
} from "../http/requests";

const initialState = {
  boxes: [],
  destroyed: false,
  maxScore: 0,
  score: 0,
  start: null,
  winner: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOXES: {
      return {
        ...state,
        start: new Date(),
        boxes: action.boxes,
      };
    }
    case UPDATE_BOXES: {
      return {
        ...state,
        boxes: action.boxes,
      };
    }
    case SET_DESTROYED: {
      return {
        ...state,
        destroyed: true,
      };
    }
    case INCREASE_ACTUAL_SCORE: {
      return {
        ...state,
        score: state.score + action.counter,
      };
    }
    case WINNER: {
      return {
        ...state,
        winner: true,
      };
    }
    case RESET_STATE: {
      return {
        ...state,
        boxes: action.boxes,
        maxScore: action.maxScore,
        score: 0,
        destroyed: false,
        start: new Date(),
        winner: false,
      };
    }
    default: {
      return state;
    }
  }
};

const useGame = () => {
  const [
    { boxes, destroyed, maxScore, score, start, winner },
    dispatch,
  ] = useReducer(reducer, initialState);

  const populateBoxes = async () => {
    try {
      const response = await generateGameDataRequest();
      dispatch({
        type: RESET_STATE,
        maxScore: response.maxScore,
        boxes: _.shuffle(response.boxes),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateBoxes();
  }, []);

  const selectedBoxHandler = async (id) => {
    const index = boxes.findIndex((el) => el.id === id);
    const boxesCopy = [...boxes];

    boxesCopy[index].isSelected = true;

    let counter = 0;
    boxesCopy.forEach((el) => {
      if (!el.isSelected && !el.isBomb && Math.random() < 0.3) {
        el.isSelected = true;
        counter++;
      }
    });

    dispatch({ type: UPDATE_BOXES, boxes: boxesCopy });

    if (boxesCopy[index].isBomb) {
      registerScoreRequest({ maxScore, score, start, end: new Date() });
      dispatch({ type: SET_DESTROYED });
      return true;
    }

    dispatch({ type: INCREASE_ACTUAL_SCORE, counter: 1 + counter });
  };

  useEffect(() => {
    if (maxScore === score) {
      dispatch({ type: WINNER });
      registerScoreRequest({ maxScore, score, start, end: new Date() });
    }
  }, [maxScore, score, start]);

  return {
    boxes,
    destroyed,
    maxScore,
    score,
    winner,
    populateBoxes,
    selectedBoxHandler,
  };
};

export default useGame;
