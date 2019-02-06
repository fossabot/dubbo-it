import React, { Component } from 'react'
import { Layout } from 'antd'
import Body from './components/Body'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render () {
    return (
      <Layout>
        <Navigation />
        <Body />
      </Layout>
    )
  }
}

export default App
