import React from 'react'
import { siteContent } from '../../data/content'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container-custom py-3 sm:py-4 md:py-5">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <img 
              src="/images/logo.jpg" 
              alt="Rising Scholars Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-secondary"
            />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800">
              Rising Scholars <span className="text-secondary-dark">Head Start</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg italic text-gray-500 mt-0.5 sm:mt-1">
              "Where Young Minds Rise and Futures Begin."
            </p>
          </div>
        </div>
        <div className="mt-2 sm:mt-3 bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 flex flex-wrap gap-1 sm:gap-2 md:gap-4 text-xs sm:text-sm md:text-base text-gray-600">
          <span className="flex items-center gap-1">📍 4544 Myhand Street, Addis, LA 70710</span>
          <span className="flex items-center gap-1">🕐 Mon–Fri, 6:00 a.m. – 6:00 p.m.</span>
          <span className="flex items-center gap-1">📞 225-405-5288</span>
          <span className="flex items-center gap-1">✉️ RisingscholarsHS@gmail.com</span>
          <span className="flex items-center gap-1">👶 Birth–4 Years</span>
        </div>
      </div>
    </header>
  )
}

export default Header