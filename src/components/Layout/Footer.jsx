import React from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../data/content'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-gray-300 py-8 sm:py-10">
      <div className="container-custom text-center">
        <p className="text-lg sm:text-xl text-secondary font-semibold">
          {siteContent.name}
        </p>
        <p className="text-sm sm:text-base italic">"{siteContent.tagline}"</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 text-sm sm:text-base">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link to="/classrooms" className="hover:text-secondary transition-colors">Classrooms</Link>
          <Link to="/family" className="hover:text-secondary transition-colors">Family</Link>
          <Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-4">
          &copy; {currentYear} {siteContent.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer