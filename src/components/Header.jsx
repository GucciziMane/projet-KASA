import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header-logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header