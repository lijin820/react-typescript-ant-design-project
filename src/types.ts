export type SelectType = {
  value: string;
  label: string;
  key: string;
};

export type ModalType = {
  visible: boolean;
  setVisble: (args: boolean) => void;
};

export type ListType = {
  activities: ActivityType[];
};

export type ActivityType = {
  type: string;
  url?: string;
  note: string;
};

export type ActivityState = {
  activities: ActivityType[];
};

export type RootState = {
  activityState: ActivityState;
};

export type PayloadType = {
  type: string;
  payload: {
    type: string;
    url?: string;
    note: string;
  };
};
