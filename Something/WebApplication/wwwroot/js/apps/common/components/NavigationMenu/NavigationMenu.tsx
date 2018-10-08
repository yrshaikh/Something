import * as React from "react";
import { Layout, Menu, Icon } from "antd";

import "./NavigationMenu.scss";

const { Sider } = Layout;

export class NavigationMenu extends React.Component {
    public render() {
        return (
            <Sider className="NavigationMenu">
                <div className="NavigationMenu__logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Icon type="exclamation-circle" />
                        <span className="nav-text">Issues</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="folder" />
                        <span className="nav-text">Projects</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="team" />
                        <span className="nav-text">Users</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
