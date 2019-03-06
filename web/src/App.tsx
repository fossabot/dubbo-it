import React, { Component } from 'react'
import { Layout } from 'antd'
import Navigation from './components/Navigation'
import Registries from './components/Registries'
import './App.css'

class App extends Component {
  render() {
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
