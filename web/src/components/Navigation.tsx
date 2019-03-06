import { Layout, Menu } from 'antd'
import React, { Component } from 'react'

const { Header } = Layout

class Navigation extends Component {
  render(): React.ReactNode {
    return (
      <Header className="header" tagName="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Navigation
