import React from 'react'
import { siteContent } from '../../data/content'

const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-secondary">
      <p className="text-lg text-gray-700">
        Welcome to <strong>{siteContent.name}</strong>! We are committed
        to providing high-quality early childhood education that supports the development of the
        <strong> whole child</strong>. Through strong family partnerships, engaging learning experiences,
        and comprehensive support services, we prepare children for success in school and life.
      </p>
    </div>
  )
}

export default WelcomeSection