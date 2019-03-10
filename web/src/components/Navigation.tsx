import { Button, Layout, Modal } from 'antd'
import React, { Component } from 'react'

const { Header } = Layout

class Navigation extends Component {
  public state = { isModalVisible: false }

  public render(): React.ReactNode {
    return (
      <Header className="header" tagName="header">
        <Button type="primary" icon="plus-circle" onClick={this.showModal}>New</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onCancel={this.handleModalCancel}
          footer={null}
        >
          <p>Hello</p>
        </Modal>
      </Header>
    )
  }

  private showModal = () => {
    this.setState({
      isModalVisible: true,
    })
  }

  private handleModalCancel = (e: React.MouseEvent<any>) => {
    this.setState({
      isModalVisible: false,
    })
  }
}

export default Navigation
