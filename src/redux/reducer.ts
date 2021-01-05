import { combineReducers, Reducer } from "redux";

import activityReducer from "./reducer/activity";

import { RootState } from "../types";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  activityState: activityReducer,
});

export default rootReducer;
