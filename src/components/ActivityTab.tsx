import React, { ReactElement } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function ActivityTab(): ReactElement {
  return (
    <div className="Layout">
      <Button type="primary" icon={<PlusOutlined />}>
        Add new activity
      </Button>
    </div>
  );
}

export default ActivityTab;
