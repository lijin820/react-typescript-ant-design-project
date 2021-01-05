import { all } from "redux-saga/effects";
import activitySaga from "./activity";

export default function* rootSaga(): Generator {
  yield all([activitySaga()]);
}
