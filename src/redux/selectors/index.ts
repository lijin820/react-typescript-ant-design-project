import { ActivityState, RootState } from "../../types";

const getActivityState = (state: RootState): ActivityState =>
  state.activityState;

export default getActivityState;
