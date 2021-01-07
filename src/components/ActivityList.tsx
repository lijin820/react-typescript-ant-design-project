import React, { ReactElement } from "react";
import { List, Typography, Avatar } from "antd";
import { ListType } from "../types";

const currentUser = {
  name: "Richard Gillbert",
  shortname: "RG",
};

function ActivityList({ activities }: ListType): ReactElement {
  return (
    <List
      data-id="list"
      style={{ marginTop: 20, height: 300, overflowY: "auto" }}
      bordered
      dataSource={activities}
      renderItem={(item) => {
        return (
          <List.Item data-id="list-item">
            <Avatar
              style={{ backgroundColor: "#F0685E", marginRight: 10 }}
              size={40}
            >
              {currentUser.shortname}
            </Avatar>
            <Typography.Text strong>
              {currentUser.name} added a {item.type}:&nbsp;
            </Typography.Text>
            {item.url} {item.note}
          </List.Item>
        );
      }}
    />
  );
}

export default ActivityList;
