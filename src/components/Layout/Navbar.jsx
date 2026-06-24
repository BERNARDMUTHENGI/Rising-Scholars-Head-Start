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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          <div className="text-gray-800 font-bold text-lg sm:text-xl">
            <span className="text-secondary-dark">RS</span> Head Start
          </div>

          <ul className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-gray-600 font-medium text-sm lg:text-base hover:text-primary transition-colors ${
                      isActive ? 'text-primary border-b-2 border-primary' : ''
                    }`
                  }
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-gray-800 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-gray-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors ${
                      isActive ? 'bg-gray-50 text-primary' : ''
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