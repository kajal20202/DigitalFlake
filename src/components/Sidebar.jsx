import React, { useState } from "react";

import {
  EnvironmentOutlined,
  EyeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function getItem(label, key, icon, path, children) {
  if (children) {
    return {
      key,
      icon,
      path,
      children: children.map((child) =>
        getItem(child.label, child.key, child.icon, child.path)
      ),
      label,
    };
  }

  return {
    key,
    icon,
    path,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />, "/sidebar"),
  getItem("Category", "2", <EyeOutlined />, "/sidebar/Category"),
  getItem("Product", "3", <EnvironmentOutlined />, "/sidebar/Product"),
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const logout = () => {
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }} className="sidebar-left">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      <Link to={child.path}>{child.label}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: "end",
          }}
        >
          <div className="profile-dropdown">
            <button className="dropdown-item" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div
            style={{
              padding: 25,
              minHeight: 700,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
