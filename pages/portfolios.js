import BaseLayout from '../components/layouts/BaseLayout'
import { Link } from '../routes/routes'

import axios from 'axios'

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = []

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      posts = response.data
    } catch (error) {
      console.log(error)
    }

    return { posts: posts.splice(0, 10) }
  }

  renderPosts(posts) {
    return posts.map((post, index) => (
      <li key={index}>
        <Link route={`/portfolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))
  }

  render() {
    const { posts } = this.props

    return (
      <BaseLayout>
        <h1>Portfolios Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    )
  }
}

export default Portfolios
