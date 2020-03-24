import BaseLayout from '../components/layouts/BaseLayout'

class SuperComponent extends React.Component {
  constructor(props) {
    super(props)
    this.somVariable = 'Just some variable'
  }

  alertName(title) {
    alert(title)
  }

  render() {
    return (
      <BaseLayout>
        <h1>SuperComponent Page</h1>
      </BaseLayout>
    )
  }
}

export default SuperComponent
