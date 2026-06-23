import React from 'react'
import { siteContent } from '../../data/content'

const WholeChild = () => {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-primary mb-4">What We Nurture</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {siteContent.wholeChildAreas.map((area, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-primary text-lg">✓</span>
            <div>
              <strong className="block">{area.title}</strong>
              <span className="text-sm text-gray-600">{area.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WholeChild