import React, { ReactElement, useState } from "react";
import { Layout, Menu, Tabs } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import ActivityTab from "./components/ActivityTab";
import "./App.css";

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

function App(): ReactElement {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="App">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Overview
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleSidebar,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Activity Feed" key="1">
              <ActivityTab />
            </TabPane>
            <TabPane tab="Status" key="2">
              Data not available
            </TabPane>
            <TabPane tab="Document" key="3">
              Data not available
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
