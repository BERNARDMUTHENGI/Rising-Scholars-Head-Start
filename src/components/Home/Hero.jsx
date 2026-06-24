import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-cream py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
              Welcome to Rising Scholars Head Start Early Learning Center
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              We are committed to providing high-quality early childhood education that supports the development of the whole child.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Link to="/about" className="bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 shadow-sm text-sm sm:text-base">
                Learn More
              </Link>
              <Link to="/contact" className="bg-gray-200 text-gray-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all text-sm sm:text-base">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="w-full h-48 sm:h-56 md:h-74 lg:h-120 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/hero.jpeg" 
                alt="Happy children learning and playing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero