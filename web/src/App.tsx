import { Layout } from 'antd'
import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Registries from './components/Registries'

class App extends Component {
  public render() {
    return (
      <Layout tagName="main">
        <Navigation/>
        <Layout tagName="section">
          <Registries/>
        </Layout>
      </Layout>
    )
  }
}

export default App
