import React, { ReactElement, useState } from "react";
import { Input, Modal, Select, Space } from "antd";
import { ModalType, SelectType } from "../types";

const { Option } = Select;
const { TextArea } = Input;

function AddActivityModal({ visible, setVisble }: ModalType): ReactElement {
  const [type, setType] = useState<string>("note");
  const [url, setUrl] = useState<string>();
  const [note, setNote] = useState<string>();

  const handleChange = (value: SelectType) => {
    setType(value.value);
  };

  const submitValues = () => {
    // eslint-disable-next-line no-console
    console.log(type, url, note);
  };

  return (
    <Modal
      title="Add Activity"
      centered
      visible={visible}
      okText="Submit"
      onOk={submitValues}
      onCancel={() => setVisble(false)}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Select
          labelInValue
          defaultValue={{ value: "note", label: "Add Note", key: "note" }}
          style={{ width: 150 }}
          onChange={handleChange}
        >
          <Option value="note">Add Note</Option>
          <Option value="enquiry">Add Enquiry</Option>
          <Option value="task">Add Task</Option>
        </Select>
        <Input
          placeholder="Add Property URL (optional)"
          style={{ width: 300 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUrl(e.target.value)
          }
        />
        <TextArea
          rows={4}
          placeholder="Add notes..."
          style={{ width: "100%", resize: "none" }}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNote(e.target.value)
          }
        />
      </Space>
    </Modal>
  );
}

export default AddActivityModal;