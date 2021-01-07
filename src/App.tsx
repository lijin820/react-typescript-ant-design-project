import React, { ReactElement } from "react";
import { Layout, Menu, Tabs, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import ActivityTab from "./components/ActivityTab";

import richard from "./assets/images/richard.jpg";
import "./App.css";

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

function App(): ReactElement {
  return (
    <Layout className="App">
      <Sider trigger={null} width={250} style={{ backgroundColor: "#3394fc" }}>
        <div className="logo">
          <span>PERCHPEEK</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="custom-menu"
        >
          <Menu.Divider className="custom-divider" />
          <Menu.Item key="1" className="custom-menu-item">
            Overview
          </Menu.Item>
          <Menu.Divider className="custom-divider" />
          <Menu.ItemGroup title="MANAGE">
            <Menu.Item key="2" className="custom-menu-item">
              Users
            </Menu.Item>
            <Menu.Item key="3" className="custom-menu-item">
              Properties
            </Menu.Item>
            <Menu.Item key="4" className="custom-menu-item">
              Viewings
            </Menu.Item>
            <Menu.Item key="5" className="custom-menu-item">
              Support
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.Divider className="custom-divider" />
          <Menu.ItemGroup title="GET HELP">
            <Menu.Item key="6" className="custom-menu-item">
              Knowledge Base
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Input
            size="large"
            style={{
              width: "50%",
              border: "none",
              marginLeft: 16,
            }}
            placeholder="Search..."
            prefix={<SearchOutlined />}
          />
          <div className="avatar-container">
            <img src={richard} alt="avatar" className="profile-image" />
          </div>
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
