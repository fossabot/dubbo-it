import React, { Component } from 'react'
import { Layout } from 'antd'
import Navigation from './components/Navigation'
import Services from './components/Services'
import './App.css'

class App extends Component {
  render() {
    return (
      <Layout tagName="main">
        <Navigation/>
        <Layout tagName="section">
          <Services/>
        </Layout>
      </Layout>
    )
  }
}

export default App
