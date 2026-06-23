import React from 'react'
import { siteContent } from '../../data/content'

const InclusiveStatement = () => {
  return (
    <div className="bg-red-50 rounded-xl p-6 sm:p-8 border-l-4 border-primary">
      <h3 className="text-2xl font-bold text-primary mb-3">❤️ All families are welcome here!</h3>
      <p className="text-gray-700 mb-3">
        We welcome and celebrate families of all kinds including:
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 list-disc pl-5 text-gray-700">
        {siteContent.familyTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
      <p className="text-gray-700 mt-4">
        We use <strong>inclusive language</strong>, celebrate diverse family structures,
        and ensure every child sees their family represented in our classroom materials and displays.
      </p>
    </div>
  )
}

export default InclusiveStatement