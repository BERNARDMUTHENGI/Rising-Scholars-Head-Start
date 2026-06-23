import React from 'react'
import { siteContent } from '../../data/content'

const MissionVision = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-secondary">
        <h3 className="text-xl font-bold text-primary mb-3">⭐ Our Mission</h3>
        <p className="text-gray-700">{siteContent.mission}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-secondary">
        <h3 className="text-xl font-bold text-primary mb-3">⭐ Our Vision</h3>
        <p className="text-gray-700">{siteContent.vision}</p>
      </div>
    </div>
  )
}

export default MissionVision