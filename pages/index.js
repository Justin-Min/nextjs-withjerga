import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {}

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      userData = response.data
    } catch (error) {
      console.log(error)
    }

    return { userData }
  }

  constructor(props) {
    super(props)
    this.state = {
      title: 'I am Index Page'
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  updateTitle = () => {
    this.setState({ title: 'I am updated index page' })
  }
  render() {
    const { title } = this.state
    const { userData } = this.props

    return (
      <BaseLayout>
        <h1>Index Page</h1>
        <h2>{title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    )
  }
}

export default Index
