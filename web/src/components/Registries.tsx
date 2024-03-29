import { Layout, Menu } from 'antd'
import React, { Component } from 'react'
import '../css/registries.css'

const { SubMenu } = Menu
const { Sider } = Layout

class Registries extends Component {
  public render(): React.ReactNode {
    return (
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          className="registries"
        >
          <SubMenu key="sub1" title={<span>subnav 1</span>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>subnav 2</span>}>
            <Menu.Item key="4">option4</Menu.Item>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default Registries
