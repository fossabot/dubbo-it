import React, { Component } from 'react'
import { Layout, Menu } from 'antd'

const { Sider } = Layout
const { SubMenu } = Menu

export default class Services extends Component {
  render () {
    return (
      <Sider>
        <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key='sub1' title={<span>service 1</span>}>
            <Menu.Item key='1'>method 1</Menu.Item>
            <Menu.Item key='2'>method 2</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title={<span>service 2</span>}>
            <Menu.Item key='3'>method 3</Menu.Item>
            <Menu.Item key='4'>method 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
