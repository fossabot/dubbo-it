import React, { Component } from 'react'
import { Layout } from 'antd'
import Services from './Services'

const { Content } = Layout

export default class Body extends Component {
  render () {
    return (
      <Layout>
        <Services />
        <Content>Content</Content>
      </Layout>
    )
  }
}
