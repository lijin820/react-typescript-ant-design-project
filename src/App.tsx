import React, { ReactElement, useState } from "react";
import { Layout, Menu, Tabs, Divider } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

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
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{ backgroundColor: "#3394fc" }}
      >
        <div className="logo">
          <span>PERCHPEEK</span>
        </div>
        <Divider
          style={{
            backgroundColor: "#55B4FF",
            width: 210,
            minWidth: 210,
            margin: 20,
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#3394fc" }}
        >
          <Menu.Item
            key="1"
            style={{
              color: "#D1F7FB",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Overview
          </Menu.Item>
          <Divider
            style={{
              backgroundColor: "#55B4FF",
              width: 210,
              minWidth: 210,
              margin: 20,
            }}
          />
          <div className="section-title">
            <span>MANAGE</span>
          </div>
          <Menu.Item
            key="2"
            style={{
              color: "#D1F7FB",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Users
          </Menu.Item>
          <Menu.Item
            key="3"
            style={{
              color: "#D1F7FB",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Properties
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{
              color: "#D1F7FB",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Viewings
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{
              color: "#D1F7FB",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Support
          </Menu.Item>
          <Divider
            style={{
              backgroundColor: "#55B4FF",
              width: 210,
              minWidth: 210,
              margin: 20,
            }}
          />
          <div className="section-title">
            <span>GET HELP</span>
          </div>
          <Menu.Item
            key="6"
            style={{
              color: "#D1F7FB",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            Knowledge Base
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
