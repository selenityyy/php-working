import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

  const links = [
    { to: '/',        label: 'Home'    },
    { to: '/about',   label: 'About'   },
    { to: '/asa',     label: 'ASA'     },
    { to: '/pga',     label: 'PGA'     },
    { to: '/socials', label: 'Socials' },
    { to: '/join',    label: 'Join Us' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-badge">ASA</div>
          <span className="logo-text">Asian Students Association</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-links">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
