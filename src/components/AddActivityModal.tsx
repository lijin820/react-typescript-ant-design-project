import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Modal, Select, Space } from "antd";
import { ModalType, SelectType } from "../types";
import { ADD_ACTIVITY_REQUEST } from "../redux/constants";

const { Option } = Select;
const { TextArea } = Input;

function AddActivityModal({ visible, setVisible }: ModalType): ReactElement {
  const dispatch = useDispatch();

  const [type, setType] = useState<string>("note");
  const [url, setUrl] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handleChange = (value: SelectType) => {
    setType(value.value);
  };

  const submitValues = () => {
    if (note) {
      dispatch({ type: ADD_ACTIVITY_REQUEST, payload: { type, url, note } });
      setVisible(false);
      setNote("");
      setUrl("");
    }
  };

  return (
    <Modal
      data-id="modal-container"
      title="Add Activity"
      centered
      visible={visible}
      okText="Submit"
      onOk={submitValues}
      cancelButtonProps={{ style: { display: "none" } }}
      onCancel={() => setVisible(false)}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Select
          data-id="select-type"
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
          data-id="property-input"
          placeholder="Add Property URL (optional)"
          style={{ width: 300 }}
          value={url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUrl(e.target.value)
          }
        />
        <TextArea
          data-id="note-input"
          rows={4}
          placeholder="Add notes..."
          style={{ width: "100%", resize: "none" }}
          value={note}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNote(e.target.value)
          }
        />
      </Space>
    </Modal>
  );
}

export default AddActivityModal;
