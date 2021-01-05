import {
  ADD_ACTIVITY_REQUEST,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAILURE,
  GET_ALL_ACTIVITIES_REQUEST,
  GET_ALL_ACTIVITIES_SUCCESS,
  GET_ALL_ACTIVITIES_FAILURE,
} from "../constants";
import { ActivityState } from "../../types";

const initialState: ActivityState = {
  activities: [],
};

// eslint-disable-next-line
export default (state = initialState, action: any): any => {
  switch (action.type) {
    case ADD_ACTIVITY_REQUEST:
      return {
        ...state,
      };
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: action.payload,
      };
    case ADD_ACTIVITY_FAILURE:
      return {
        ...state,
      };
    case GET_ALL_ACTIVITIES_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ALL_ACTIVITIES_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
