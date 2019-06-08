import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const activeLink = { color: '#F15B2A' }

  return (
    <nav>
      <NavLink to="/" activeStyle={activeLink} exact>Home</NavLink>{' | '}
      <NavLink to="/about" activeStyle={activeLink}>About</NavLink>{' | '}
      <NavLink to="/courses" activeStyle={activeLink}>Courses</NavLink>
    </nav>
  )
}

export default Header;