import React, { ReactElement } from "react";
import { List, Typography } from "antd";
import { ListType } from "../types";

function ActivityList({ activities }: ListType): ReactElement {
  return (
    <List
      data-id="list"
      style={{ marginTop: 20 }}
      bordered
      dataSource={activities}
      renderItem={(item) => (
        <List.Item data-id="list-item">
          <Typography.Text strong>
            You&apos;ve created a {item.type}:
          </Typography.Text>
          {item.url} {item.note}
        </List.Item>
      )}
    />
  );
}

export default ActivityList;
