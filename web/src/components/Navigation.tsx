import { ClickParam } from 'antd/lib/menu'
import { Button, Dropdown, Icon, Layout, Menu, Modal } from 'antd'
import React, { Component } from 'react'

const { Header } = Layout

class Navigation extends Component {
  public state = { isRegistryModalVisible: false }

  public render(): React.ReactNode {
    return (
      <Header className="header" tagName="header">
        <Dropdown overlay={this.menu}>
          <Button type="primary">New<Icon type="caret-down" /></Button>
        </Dropdown>
        <Modal
          title="Create New"
          visible={this.state.isRegistryModalVisible}
          onCancel={this.handleRegistryModalCancel}
          footer={null}
        >
          <p>Hello</p>
        </Modal>
      </Header>
    )
  }

  private menu: React.ReactNode = () => {
    return (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Registry</Menu.Item>
      </Menu>
    )
  }

  private handleMenuClick = (clickParam: ClickParam) => {
    switch (clickParam.key) {
      case "1":
        this.showRegistryModal()

        break
      default:
        break
    }
  }

  private showRegistryModal = () => {
    this.setState({
      isRegistryModalVisible: true,
    })
  }

  private handleRegistryModalCancel = (e: React.MouseEvent<any>) => {
    this.setState({
      isRegistryModalVisible: false,
    })
  }
}

export default Navigation
