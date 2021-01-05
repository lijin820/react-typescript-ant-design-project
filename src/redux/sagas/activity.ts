import { put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAILURE,
  GET_ALL_ACTIVITIES_REQUEST,
  GET_ALL_ACTIVITIES_SUCCESS,
  GET_ALL_ACTIVITIES_FAILURE,
} from "../constants";
import { PayloadType } from "../../types";
import { addActivityFn, getActivitiesFn } from "../api";

function* addActivity({ payload }: PayloadType): SagaIterator {
  try {
    const response = yield addActivityFn(payload);
    yield put({ type: ADD_ACTIVITY_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: ADD_ACTIVITY_FAILURE });
  }
}

function* getAllActivities(): SagaIterator {
  try {
    const response = yield getActivitiesFn();
    yield put({ type: GET_ALL_ACTIVITIES_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_ALL_ACTIVITIES_FAILURE });
  }
}

export default function* activitySaga(): SagaIterator {
  yield takeEvery(ADD_ACTIVITY_REQUEST, addActivity);
  yield takeEvery(GET_ALL_ACTIVITIES_REQUEST, getAllActivities);
}
