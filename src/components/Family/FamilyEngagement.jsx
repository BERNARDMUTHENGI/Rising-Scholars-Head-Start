import React from 'react'
import { siteContent } from '../../data/content'

const FamilyEngagement = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteContent.familyEngagement.map((item, index) => (
        <div key={index} className="card card-hover text-center">
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FamilyEngagement