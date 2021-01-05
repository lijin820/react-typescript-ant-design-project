import React, { ReactElement, useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddActivityModal from "./AddActivityModal";

function ActivityTab(): ReactElement {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="Layout">
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setModalVisible(true)}
      >
        Add new activity
      </Button>
      <AddActivityModal visible={modalVisible} setVisble={setModalVisible} />
    </div>
  );
}

export default ActivityTab;
