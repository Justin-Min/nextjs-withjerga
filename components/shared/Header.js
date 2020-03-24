import Link from 'next/link'
import '../../styles/main.scss'

class Header extends React.Component {
  render() {
    const title = this.props.title
    return (
      <React.Fragment>
        <h1>{title}</h1>
        <p className='customClassFromFile'>This is a paragraph.</p>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/portfolios'>
          <a>Portfolios</a>
        </Link>
        <Link href='/blogs'>
          <a>Blogs</a>
        </Link>
        <Link href='/cv'>
          <a>Cv</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </React.Fragment>
    )
  }
}

export default Header
