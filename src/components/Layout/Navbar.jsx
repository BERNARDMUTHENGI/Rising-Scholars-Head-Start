import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/classrooms', label: 'Classrooms' },
    { to: '/family', label: 'Family Engagement' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-dark sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          <div className="text-white font-bold text-lg sm:text-xl">
            <span className="text-secondary">RS</span> Head Start
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-white font-medium text-sm lg:text-base hover:text-secondary transition-colors ${
                      isActive ? 'text-secondary border-b-2 border-secondary' : ''
                    }`
                  }
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <ul className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/20 transition-colors ${
                      isActive ? 'bg-primary/30 text-secondary' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar