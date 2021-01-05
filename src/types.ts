export type SelectType = {
  value: string;
  label: string;
  key: string;
};

export type ModalType = {
  visible: boolean;
  setVisble: (args: boolean) => void;
};
