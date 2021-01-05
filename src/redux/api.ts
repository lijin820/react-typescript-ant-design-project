import { ActivityType } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PromiseCallback = (value?: any) => void;

const saveActivity = ({ type, url, note }: ActivityType) => (
  resolve: PromiseCallback
) => {
  const existingActivities = JSON.parse(
    localStorage.getItem("activities") || "[]"
  );
  const newActivity = {
    type,
    url,
    note,
  };
  existingActivities.push(newActivity);
  localStorage.setItem("activities", JSON.stringify(existingActivities));
  resolve(existingActivities);
};

const loadActivities = () => (resolve: PromiseCallback) => {
  const existingActivities = JSON.parse(
    localStorage.getItem("activities") || "[]"
  );
  resolve(existingActivities);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addActivityFn = (payload: ActivityType): any =>
  new Promise(saveActivity(payload));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getActivitiesFn = (): any => new Promise(loadActivities());

export { addActivityFn, getActivitiesFn };
