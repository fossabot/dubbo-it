import { Button, Dropdown, Form, Icon, Input, Layout, Menu, Modal } from 'antd'
import { ClickParam } from 'antd/lib/menu'
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
          title="New Registry"
          visible={this.state.isRegistryModalVisible}
          onCancel={this.handleRegistryModalCancel}
        >
          <Form>
            <Form.Item label="Host">
              <Input />
            </Form.Item>
            <Form.Item label="Port">
              <Input />
            </Form.Item>
            <Form.Item label="Username">
              <Input />
            </Form.Item>
            <Form.Item label="Password">
              <Input />
            </Form.Item>
          </Form>
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
