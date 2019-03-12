import { Layout } from 'antd'
import React, { Component } from 'react'

const { Content } = Layout

class Body extends Component {
  public render(): React.ReactNode {
    return (
      <Content tagName="section">
        Content
      </Content>
    )
  }
}

export default Body
