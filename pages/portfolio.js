import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios'

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    const portfolioId = query.id
    let portfolio = {}

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
      )
      portfolio = response.data
    } catch (error) {
      console.error(error)
    }
    return { portfolio }
  }

  render() {
    const { portfolio } = this.props

    return (
      <BaseLayout>
        <h1>title: {portfolio.title}</h1>
        <h2>Body: {portfolio.body}</h2>
        <h3>ID: {portfolio.id}</h3>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio)
