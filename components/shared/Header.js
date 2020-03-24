import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'

const BsNavLink = props => {
  const { route, title } = props
  return (
    <NavItem className='port-navbar-item'>
      <Link href={route}>
        <a className='nav-link port-navbar-link'>{title}</a>
      </Link>
    </NavItem>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar
        className='port-navbar port-default absolute'
        color='transparent'
        dark
        expand='md'
      >
        <NavbarBrand className='port-navbar-brand' href='/'>
          Justin Rocks!
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <BsNavLink route='/' title='Home' />
            <BsNavLink route='/about' title='About' />
            <BsNavLink route='/portfolios' title='Portfolios' />
            <BsNavLink route='/blogs' title='Blogs' />
            <BsNavLink route='/cv' title='CV' />
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header
