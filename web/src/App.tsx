import { Layout } from 'antd'
import React, { Component } from 'react'
import './App.css'
import Body from './components/Body'
import Navigation from './components/Navigation'
import Registries from './components/Registries'

class App extends Component {
  public render() {
    return (
      <Layout>
        <Navigation />
        <Layout>
          <Registries />
          <Body />
        </Layout>
      </Layout>
    )
  }
}

export default App
