import React from 'react'
import { siteContent } from '../../data/content'

const Header = () => {
  return (
    <header className="bg-primary text-white border-b-4 border-secondary">
      <div className="container-custom py-4 sm:py-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          Rising Scholars <span className="text-secondary">Head Start</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg italic text-gray-100 mt-1">
          "{siteContent.tagline}"
        </p>
        <div className="mt-3 bg-white/10 rounded-lg p-3 sm:p-4 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base">
          <span className="flex items-center gap-1">📍 {siteContent.address}</span>
          <span className="flex items-center gap-1">🕐 {siteContent.hours}</span>
          <span className="flex items-center gap-1">📞 {siteContent.phone}</span>
          <span className="flex items-center gap-1">✉️ {siteContent.email}</span>
          <span className="flex items-center gap-1">👶 {siteContent.ages}</span>
        </div>
      </div>
    </header>
  )
}

export default Header