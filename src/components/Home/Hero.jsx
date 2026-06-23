import React from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../data/content'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 sm:py-20 lg:py-28">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to {siteContent.name}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
          We are committed to providing high-quality early childhood education that supports the development of the whole child.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
          <Link to="/contact" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero