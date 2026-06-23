import React from 'react'
import { siteContent } from '../../data/content'

const TheoreticalFoundation = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteContent.theoreticalFoundations.map((item, index) => (
        <div key={index} className="card card-hover">
          <h3 className="text-xl font-bold text-primary">{item.name}</h3>
          <p className="text-sm font-semibold text-gray-600">{item.theory}</p>
          <p className="text-gray-700 mt-2">{item.description}</p>
          <p className="text-xs text-gray-400 mt-2">{item.citation}</p>
        </div>
      ))}
    </div>
  )
}

export default TheoreticalFoundation