import Header from '../shared/Header'

const BaseLayout = props => {
  return (
    <React.Fragment>
      <Header title={'This is a Header section.'} />
      {props.children}
    </React.Fragment>
  )
}

export default BaseLayout
