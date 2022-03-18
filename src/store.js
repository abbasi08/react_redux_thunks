import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import logger from "redux-logger";

const ADD_FOOD = "ADD_FOOD";
const DELETE_FOOD = "DELETE_FOOD";
const LOAD_MEAL = "LOAD_MEAL";

//const initialState = {};
const mealReducer = (state = [], action) => {
  if (action.type === "ADD_FOOD") {
    return [];
  }
  if (action.type === "DELETE_FOOD") {
    const meal = state.filter((food) => food.id !== action.food);
    return meal;
  }
};

export { mealReducer, ADD_FOOD, DELETE_FOOD, LOAD_MEAL };
export default store;
