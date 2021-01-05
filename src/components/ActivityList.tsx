import React, { ReactElement } from "react";
import { List, Typography } from "antd";
import { ListType } from "../types";

function ActivityList({ activities }: ListType): ReactElement {
  return (
    <List
      style={{ marginTop: 20 }}
      bordered
      dataSource={activities}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item.type}
        </List.Item>
      )}
    />
  );
}

export default ActivityList;
